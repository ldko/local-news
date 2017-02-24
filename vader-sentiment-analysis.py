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
    with open(filename, "r") as jsonf:
        news_sources = json.load(jsonf)
    for news_source in news_sources:
        texts = clean_texts(news_source['links'])
        if texts:
            print(news_source['url'], get_score(texts))


def clean_texts(texts):
    """Only count text over four words and remove duplicates."""
    cleaned_texts = [x.replace('\n', '') for x in texts if len(x.split(' ')) > 3]
    return list(set(cleaned_texts))


def get_score(sentences):
    """Takes lists of texts."""
    analyzer = SentimentIntensityAnalyzer()

    neg1 = 0
    neu1 = 0
    pos1 = 0
    c = float(len(sentences))
    for sentence in sentences:
        # vs example: {'compound': -0.6705, 'neu': 0.522, 'pos': 0.0, 'neg': 0.478}
        vs = analyzer.polarity_scores(sentence)
        neg1 += vs['neg']
        neu1 += vs['neu']
        pos1 += vs['pos']
    scores = {}
    scores['neg'] = float(neg1/c)
    scores['neu'] = float(neu1/c)
    scores['pos'] = float(pos1/c)
    max_key = max(scores, key=scores.get)
    return max_key, scores[max_key]


def main():
    """Determine sentiment of text."""
    description = ('Determines sentiment of text.')
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument('filename', help='file of JSON')
    args = parser.parse_args()
    get_scores(args.filename)


if __name__ == '__main__':
    main()
