#!/usr/bin/env python

#code from:https://github.com/cjhutto/vaderSentiment#vader-sentiment-analysis
#code altered by:Lulwah Alkwai-ODU, Feb 23, 2017
#note: depending on how you installed (e.g., using source code download versus pip install), you may need to import like this:
#from vaderSentiment import SentimentIntensityAnalyzer

from __future__ import print_function

import argparse
import json

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def get_scores(filename='./fragement-extract/articles.json'):
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
    c = 0
    for sentence in sentences:
        c = c + 1
        vs = analyzer.polarity_scores(sentence)
        vx = ("{:-<65} {}".format(sentence, str(vs)))
        vx = vx.split("{")
        vxx = vx[1].split(",")

        #1
        neg = vxx[0]
        neg = neg.split(":")
        negative = neg[1]
        negative = float(negative.strip())
        neg1 = neg1 + negative
        
        #2
        neu = vxx[1]
        neu = neu.split(":")
        neutural = neu[1]
        neutural = float(neutural.strip())
        neu1 = neu1 + neutural
        
        #3
        pos = vxx[2]
        pos = pos.split(":")
        positive = pos[1]
        positive = float(positive.strip())
        pos1 = pos1 + positive

    scores = {}
    scores['neg'] = float(neg1/c) * 100.0
    scores['neu'] = float(neu1/c) * 100.0
    scores['pos'] = float(pos1/c) * 100.0
    print(scores)
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
