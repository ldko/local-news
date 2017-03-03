##Archives Unleashed Hackathon

This repo is the product of the "Local News" team's work at
Archives Unleashed 3.0 held at the Internet Archive 
February 23-24, 2017.

##About the Work
`fragment-extract/fulltext.py` parses HTML content of a WARC file
containing content from news sites. Headlines are heuristically identified
and output into a JSON structure.

`sentiment-analysis/vader-sentiment-analysis.py` takes this resulting
news source data, plus a CSV of Alexa rankings, and a CSV of news source
locations in order to produce sentiment related data to be used
by the visualization aspect.

The visualization shows a U.S. map with heatmap layers identifying
the net sentiment (positive/negative) of a newspaper' headlines on a
given date. The radius of the heatmap spot is based on the Alexa
global ranking.

Clicking on the `Show Points` button displays map markers for cities of
included news sources.

Clicking on a marker displays headlines and a
word cloud for each news source.

Clicking on an individual headline displays related headline data.

##Team Members

- Sawood Alam, Old Dominion University
- Lulwah Alkwai, Old Dominion University
- Mark Beasley, Rhizome
- Brenda Berkelaar, University of Texas at Austin
- Frances Corry, University of Southern California
- Ilya Kreymer, Rhizome
- Nathalie Casemajor, INRS
- Lauren Ko, University of North Texas

##TODO
- Implement temporal aspect
