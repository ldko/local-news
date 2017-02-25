#!/usr/bin/env python

#code from:https://github.com/cjhutto/vaderSentiment#vader-sentiment-analysis
#code altered by:Lulwah Alkwai-ODU, Feb 23, 2017
#note: depending on how you installed (e.g., using source code download versus pip install), you may need to import like this:
#from vaderSentiment import SentimentIntensityAnalyzer

from __future__ import print_function

import argparse
import csv
import json

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def get_scores(filename):
    paper_info = {}
    with open('./sources.csv') as csvf:
        creader = csv.DictReader(csvf)
        for row in creader:
            paper_info[row['URL']] = {'city': row['City'], 'paper': row['Outlet Name']}
    analyzer = SentimentIntensityAnalyzer()
    full_sources = sources = []
    with open(filename, "r") as jsonf:
        news_sources = json.load(jsonf)
    for news_source in news_sources:
        sources = {}
        texts = clean_texts(news_source['links'])
        if not texts:
            continue
        source_data = []
        for sentence in texts:
            source_data.append({'data': analyzer.polarity_scores(sentence),
                                'title': sentence})
        try:
            title = paper_info[news_source['url'].strip('/')]
        except KeyError:
            title = paper_info[news_source['url']]
        sources['paper'] = title['paper']
        sources['headlines'] = source_data
        sources['date'] = news_source['timestamp'][:9]
        sources['city'] = title['city']
        full_sources.append(sources)
    return json.dumps(full_sources, indent=4, sort_keys=True)
                


def clean_texts(texts):
    """Only count text over four words and remove duplicates."""
    cleaned_texts = [x.replace('\n', ' ') for x in texts if len(x.split(' ')) > 3]
    return list(set(cleaned_texts))


def main():
    """Determine sentiment of text."""
    description = ('Determines sentiment of text.')
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument('filename', help='file of JSON')
    args = parser.parse_args()
    print('var sampleData =', get_scores(args.filename))


if __name__ == '__main__':
    main()
