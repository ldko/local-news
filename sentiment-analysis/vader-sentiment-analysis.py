#!/usr/bin/env python

from __future__ import print_function

import argparse
import csv
import json
import os
import time
try:
    # Python3
    from urllib.parse import urlparse
except:
    from urlparse import urlparse

import geocoder
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def get_scores(news_sources, paper_info, alexa_ranks=None):
    """Generates sentiment scores for news headlines.

    news_sources is JSON news headlines per news source/date.
    paper_info is a dict of each paper's title/city data.
    """
    analyzer = SentimentIntensityAnalyzer()
    full_sources = []
    for news_source in news_sources:
        source = {}
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
        source['paper'] = title['paper']
        source['headlines'] = source_data
        source['date'] = news_source['timestamp'][:9]
        source['city'] = title['city']
        # Get location. Sleep to avoid request limit.
        time.sleep(1)
        coordinates = geocoder.google(title['city']).latlng
        location = {'lat': coordinates[0], 'lng': coordinates[1]}
        source['location'] = location
        # Get Alexa ranking by URL's domain.
        domain = '.'.join(urlparse(news_source['url']).netloc.split('.')[-2:])
        if alexa_ranks:
            try:
                source['rank'] = int(alexa_ranks[domain])
            except KeyError:
                source['rank'] = 0
        full_sources.append(source)
    return json.dumps(full_sources, indent=4, sort_keys=True)


def clean_texts(texts):
    """Only count text over four words and remove duplicates."""
    cleaned_texts = [x.replace('\n', ' ') for x in texts if len(x.split(' ')) > 3]
    return list(set(cleaned_texts))


def main():
    """Determine sentiment of news headlines."""
    description = ('Determines sentiment of news headlines.')
    parser = argparse.ArgumentParser(description=description)
    parser.add_argument('filename', help='file of headlines JSON')
    args = parser.parse_args()

    path = os.path.dirname(os.path.realpath(__file__))
    paper_info = {}
    alexa_ranks = {}

    # Load the headline data.
    with open(args.filename, 'r') as jsonf:
        news_sources = json.load(jsonf)

    # Load the newspaper sources data.
    with open(os.path.join(path, 'sources.csv')) as csvf:
        creader = csv.DictReader(csvf)
        for row in creader:
            paper_info[row['URL']] = {'city': row['City'],
                                      'paper': row['Outlet Name']}

    # Load the Alexa rankings.
    with open(os.path.join(path, 'Alexarank_noduplicates.csv')) as csvf:
        creader = csv.DictReader(csvf)
        for row in creader:
            alexa_ranks[row['Domain']] = row['Global Rank']

    # Output JavaScript data for visualization.
    print('var sampleData = ' + get_scores(news_sources, paper_info, alexa_ranks) + ';')


if __name__ == '__main__':
    main()
