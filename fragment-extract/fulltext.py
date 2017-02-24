from pywb.warc.archiveiterator import DefaultRecordParser
from pywb.utils.bufferedreaders import DecompressingBufferedReader
from pywb.utils.timeutils import timestamp_to_datetime
from bs4 import BeautifulSoup

#import goose
import sys
import re
from pprint import pprint
import json

from binaryornot.check import is_binary_string
from io import BytesIO

class FullTextRecordParser(DefaultRecordParser):
    def create_payload_buffer(self, entry):
        mime = entry.get('mime')
        if mime and ('text/' in mime):
            return BytesIO()
        else:
            return None


def extract_text(entry):
    buff_reader = entry.buffer
    if not buff_reader:
        return b''

    buff_reader.seek(0)

    if entry.record.status_headers.get_header('content-encoding'):
        buff_reader = DecompressingBufferedReader(buff_reader)

    buff = b''
    while True:
        new_buff = buff_reader.read()
        if not new_buff:
            break

        buff += new_buff

    if is_binary_string(buff):
        return b''

    return buff


def main(url_list):
    ID_RX = re.compile('urn:uuid:([^>]+)')

    options = dict(append_post=True, include_all=True)
    #g = goose.Goose()

    filename = sys.argv[1]

    for entry in FullTextRecordParser(**options).open(filename):
        if entry.record.rec_type not in ('resource', 'response'):
            continue

        mime = entry.get('mime', '-')

        status = entry.get('status', '-')

        if status.startswith(('3', '5', '4')):
            continue

        if mime not in ('text/html', 'text/xhtml'):
            continue

        if entry.get('url') not in url_list:
            continue

        text = extract_text(entry)
        extract_html(entry, text)


docs = []


def extract_html(entry, text):
    global docs

    soup =  BeautifulSoup(text, 'html.parser')

    tags = soup.findAll('a')

    doc = {'url': entry.get('url'),
           'timestamp': entry.get('timestamp')
          }

    headlines = []
    for t in tags:
        if not t or not t.string:
            continue

        string = t.string.strip()

        headlines.append(string)

    doc['links'] = headlines

    #pprint(headlines)
    docs.append(doc)



if __name__ == "__main__":
    with open('filter_urls.txt') as fh:
        url_list = [url.strip() for url in fh.readlines()]

    main(url_list)

    print(json.dumps(docs))

