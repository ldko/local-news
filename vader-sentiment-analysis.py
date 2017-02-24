#!/usr/bin/env python

#code from:https://github.com/cjhutto/vaderSentiment#vader-sentiment-analysis
#code altered by:Lulwah Alkwai-ODU, Feb 23, 2017
#note: depending on how you installed (e.g., using source code download versus pip install), you may need to import like this:
#from vaderSentiment import SentimentIntensityAnalyzer

from __future__ import print_function

import argparse
import json

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def get_scores(filename):
    analyzer = SentimentIntensityAnalyzer()
    sources = {}
    with open(filename, "r") as jsonf:
        news_sources = json.load(jsonf)
    for news_source in news_sources:
        texts = clean_texts(news_source['links'])
        if not texts:
            continue
        source_data = []
        for sentence in texts:
            source_data.append({'data': analyzer.polarity_scores(sentence),
                                'title': sentence})
        sources[news_source['url']] = source_data
    return json.dumps(sources)
                


def clean_texts(texts):
    """Only count text over four words and remove duplicates."""
    cleaned_texts = [x.replace('\n', '') for x in texts if len(x.split(' ')) > 3]
    return list(set(cleaned_texts))


def main():
    """Determine sentiment of text."""
    description = ('Determines sentiment of text.')
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument('filename', help='file of JSON')
    args = parser.parse_args()
    print(get_scores(args.filename))


if __name__ == '__main__':
    main()
