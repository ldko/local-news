
#code from:https://github.com/cjhutto/vaderSentiment#vader-sentiment-analysis
#code altered by:Lulwah Alkwai-ODU, Feb 23, 2017

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
#note: depending on how you installed (e.g., using source code download versus pip install), you may need to import like this:
#from vaderSentiment import SentimentIntensityAnalyzer


openfile=open("sample.txt","r")
sentences=[]
analyzer = SentimentIntensityAnalyzer()
for line in openfile:
    #print line
    line=line.split("\t")
    title=line[0]
    #print title
    link=line[1]
    #print link
    if title not in sentences:
        sentences.append(title)

sentences.sort()
neg1=0
neu1=0
pos1=0
c=0
for sentence in sentences:
        c=c+1
        vs = analyzer.polarity_scores(sentence)
        print("{:-<65} {}".format(sentence, str(vs)))
        vx=("{:-<65} {}".format(sentence, str(vs)))
        vx=vx.split("{")
        #print vx
        vxx=vx[1].split(",")
        #1
        neg=vxx[0]
        neg=neg.split(":")
        negative=neg[1]
        negative=float(negative.strip())
        neg1=neg1+negative
        #print negative
        
        #2
        neu=vxx[1]
        neu=neu.split(":")
        neutural=neu[1]
        neutural=float(neutural.strip())
        neu1=neu1+neutural
        #print neutural
        
        #3
        pos=vxx[2]
        pos=pos.split(":")
        positive=pos[1]
        positive=float(positive.strip())
        pos1=pos1+positive
        #print positive

print "\n"

#print "total negative="+str(neg1)
neg2=float(neg1/c)*100.0
print "avg negative="+str(neg2)

#print "total neutral="+str(neu1)
neu2=float(neu1/c)*100.0
print "avg neutral="+str(neu2)

#print "total positive="+str(pos1)
pos2=float(pos1/c)*100.0
print "avg positive="+str(pos2)

print "\n"

print "number of titles="+str(c)
