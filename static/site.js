var map, negativeHeatmap, positiveHeatmap;

function initMap() {
  document.getElementById("points").addEventListener('click', showPoints);

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 37.09024, lng: -95.712891},
    mapTypeId: 'roadmap',
    styles: customMapStyle,
    scrollwheel: false,
    mapTypeControl: false,
    scaleControl: false,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    draggable: false
  });

  for(var j=0; j < sampleData.length; j++) {
    var netMood = 0;
    for(var i=0; i < sampleData[j].headlines.length; i++) {
      netMood += sampleData[j].headlines[i].data.compound;
    }
    sampleData[j].netMood = netMood;
  }

  plotData();
}

function normalize(value, min, max) {
  return (value - min) / (max - min);
}

function plotData() {
  // set up max and min for sentiment normalization
  var moods = sampleData.map(function(newsSource) {
    return newsSource.netMood;
  });
  var minMood = Math.min.apply(Math, moods);
  var maxMood = Math.max.apply(Math, moods);

  // set up max and min for rank normalization
  var ranks = sampleData.map(function(newsSource) {
    return newsSource.rank;
  });
  var minRank = Math.min.apply(Math, ranks);
  var maxRank = Math.max.apply(Math, ranks);

  for(var i=0; i < sampleData.length; i++) {
    if(sampleData[i].date !== '201607271') continue;

    // get coordinates and opacity
    var point = new google.maps.LatLng(sampleData[i].location.lat, sampleData[i].location.lng);
    var weight = normalize(Math.abs(sampleData[i].netMood), minMood, maxMood);
    var spot_data = [{'location': point, 'weight': weight}];

    // calculate a radius between 20 and 40
    var radius = 20;
    if(sampleData[i].rank !== 0) {
      radius = 40 - (20*normalize(Math.abs(sampleData[i].rank), minRank, maxRank));
    }

    if(sampleData[i].netMood > 0) {
      positiveHeatmap = new google.maps.visualization.HeatmapLayer({
        data: spot_data,
        map: map,
        radius: radius,
        gradient: [
          'rgba(0,0,0,0)',
          'rgba(229, 255, 229, 0.1)',
          'rgba(229, 255, 229, 0.2)',
          'rgba(229, 255, 229, 0.3)',
          'rgba(229, 255, 229, 0.4)',
          'rgba(204, 255, 204, 0.5)',
          'rgba(178, 255, 178, 0.6)',
          'rgba(153, 255, 153, 0.65)',
          'rgba(127, 255, 127, 0.7)',
          'rgba(102, 255, 102, 0.75)',
          'rgba(76, 255, 76, 0.8)',
          'rgba(50, 255, 50, 0.9)',
          'rgba(25, 255, 25, 0.95)',
          'rgba(0, 255, 0, 1.0)'
        ]
      });
    } else {
      negativeHeatmap = new google.maps.visualization.HeatmapLayer({
        data: spot_data,
        map: map,
        radius: radius,
        gradient: [
          'rgba(0,0,0,0)',
          'rgba(255, 248, 248, 0.1)',
          'rgba(255, 235, 236, 0.2)',
          'rgba(255, 233, 234, 0.3)',
          'rgba(255, 229, 229, 0.4)',
          'rgba(255, 204, 204, 0.5)',
          'rgba(255, 178, 178, 0.6)',
          'rgba(255, 153, 153, 0.65)',
          'rgba(255, 127, 127, 0.7)',
          'rgba(255, 102, 102, 0.75)',
          'rgba(255, 76, 76, 0.8)',
          'rgba(255, 50, 50, 0.9)',
          'rgba(255, 25, 25, 0.95)',
          'rgba(255, 0, 0, 1.0)'
        ]
      });
    }
  }
}

function showPoints() {
  for(var i=0; i < sampleData.length; i++) {
    if(sampleData[i].date !== '201607271') continue;

    var marker = new google.maps.Marker({
      position: sampleData[i].location,
      map: map,
      title: sampleData[i].paper,
      animation: google.maps.Animation.DROP,
      data: sampleData[i]
    });
    google.maps.event.addListener(marker, 'click', (function(lmap, lmarker) {
      return function() {
        //Create a new instance of the word cloud visualisation.
        var headlines = lmarker.data.headlines.map(function(newsSource) {
    return newsSource.title;
  });
        var words = headlines.join(' ');
        var myWordCloud = wordCloud(document.getElementById('word-cloud'));
        myWordCloud.update(getWords(words));

        var titles = document.getElementById('titles');
        var html = '<h3>' + lmarker.data.paper + ' Headlines</h3><ul>';
        for(var k=0; k < lmarker.data.headlines.length; k++) {
          html += '<li onClick="showRelated(\'' + lmarker.data.headlines[k].title + '\');">' + lmarker.data.headlines[k].title + '</li>';
        }
        html+='</ul>';
        titles.innerHTML = html;
        }
    })(map, marker));
  }
}

function showRelated(headline) {
  fetch('http://206.167.180.171:8080/related/20160727/'+encodeURIComponent(headline)).then(function(response) {
    return response.json().then( function (data){
        var html = '<h3>Related</h3><ul>';
        for(var k=0; k < data.related.length; k++) {
          html += '<li>'+data.related[k][0]+': '+data.related[k][1]+'</li>';
        }
        html+='</ul>';
        document.getElementById('graphs').innerHTML = html;
      })
  });
}

// Adapted from https://gist.github.com/jwhitfieldseed/9697914
// Encapsulate the word cloud functionality
function wordCloud(selector) {
    var fill = d3.scale.category20();
    //Construct the word cloud's SVG element
    var svg = d3.select(selector).append('svg')
        .attr('width', 500)
        .attr('height', 500)
        .append('g')
        .attr('transform', 'translate(250,250)');
    //Draw the word cloud
    function draw(words) {
        var cloud = svg.selectAll("g text")
                        .data(words, function(d) { return d.text; })
        //Entering words
        cloud.enter()
            .append('text')
            .style('font-family', 'Impact')
            .style('fill', function(d, i) { return fill(i); })
            .attr('text-anchor', 'middle')
            .attr('font-size', 1)
            .text(function(d) { return d.text; });
        //Entering and existing words
        cloud
            .transition()
                .duration(600)
                .style('font-size', function(d) { return d.size + 'px'; })
                .attr('transform', function(d) {
                    return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
                })
                .style('fill-opacity', 1);
        //Exiting words
        cloud.exit()
            .transition()
                .duration(200)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 1)
                .remove();
    }
    //Use the module pattern to encapsulate the visualisation code. We'll
    // expose only the parts that need to be public.
    return {
        //Recompute the word cloud for a new set of words. This method will
        // asycnhronously call draw when the layout has been computed.
        //The outside world will need to call this function, so make it part
        // of the wordCloud return value.
        update: function(words) {
            d3.layout.cloud().size([500, 500])
                .words(words)
                .padding(5)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font('Impact')
                .fontSize(function(d) { return d.size; })
                .on('end', draw)
                .start();
        }
    }
}

//Prepare one of the sample sentences by removing punctuation,
// creating an array of words and computing a random size attribute.
function getWords(words) {
    return words
            .replace(/[!\.,:;\?]/g, '')
            .split(' ')
            .map(function(d) {
                return {text: d, size: 10 + Math.random() * 60};
            })
}
