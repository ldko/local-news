FROM ruby:onbuild

ENV LANG C.UTF-8

RUN apt update && apt install -y libgsl0-dev && rm -rf /var/lib/apt/lists/*
RUN gem install narray nmatrix gsl

CMD bash
