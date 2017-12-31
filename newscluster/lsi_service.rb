#!/usr/bin/env ruby

require 'json'
require 'classifier-reborn'
require 'sinatra'

set :bind,'0.0.0.0'

lsis = Marshal.load(File.binread("lsi-models.dat"))

get '/related/:day/*' do
  response.headers['Access-Control-Allow-Origin'] = '*'
  day = params['day']
  raise Sinatra::NotFound unless lsis.key?(day)
  t = params['splat'].last
  rels = lsis[day].find_related t, 5
  related = []
  rels.each do |r|
    dom = lsis[day].classify r
    related.push [dom, r]
  end
  res = {date: day, query: t, related: related}
  res.to_json
end
