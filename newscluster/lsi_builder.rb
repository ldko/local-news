#!/usr/bin/env ruby

require 'json'
require 'classifier-reborn'

lsis = {"20160727" => ClassifierReborn::LSI.new,
        "20160802" => ClassifierReborn::LSI.new}

articles = JSON.load File.new('/data/fragment-extract/articles.json')

articles.each do |a|
  dom = a["url"].split('/')[2].split('.')[-2]
  day = a["timestamp"][0...8]
  hl = a["links"].select { |t| t.split.length > 3 }
  puts "#{day}\t#{hl.length}\t#{dom}"
  hl.each do |t|
    ct = t.gsub(/(\W|\d)+/, " ").strip
    begin
      lsis[day].add_item ct, dom
    rescue
      puts "Skipping => #{t}"
      #puts ct
    end
  end
  #puts hl
end

models = Marshal.dump lsis
File.open("lsi-models.dat", "wb") {|f| f.write(models) }
puts "Model saved in lsi-models.dat"
