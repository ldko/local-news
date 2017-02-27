var map, negativeHeatmap, positiveHeatmap, geocoder;

function initMap() {
  geocoder = new google.maps.Geocoder();
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

function normalizeMood(value, min, max) {
  return (value - min) / (max - min);
}

function plotData() {
  // set up max and min for normalization
  var moods = sampleData.map(function(newsSource) {
    return newsSource.netMood;
  });
  var minMood = Math.min.apply(Math, moods);
  var maxMood = Math.max.apply(Math, moods);

  var positiveHeatmapData = [];
  var negativeHeatmapData = [];
  for(var i=0; i < sampleData.length; i++) {
    if(sampleData[i].date !== '201607271') continue;
    var point = new google.maps.LatLng(sampleData[i].location.lat, sampleData[i].location.lng);
    var weight = normalizeMood(Math.abs(sampleData[i].netMood), minMood, maxMood);
    if(sampleData[i].netMood > 0) {
      positiveHeatmapData.push({'location': point, 'weight': weight});
    } else {
      negativeHeatmapData.push({'location': point, 'weight': weight});
    }
  }

  positiveHeatmap = new google.maps.visualization.HeatmapLayer({
    data: positiveHeatmapData,
    map: map,
    radius: 40,
    gradient: [
      'rgba(0, 0, 0, 0)',
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
  negativeHeatmap = new google.maps.visualization.HeatmapLayer({
    data: negativeHeatmapData,
    map: map,
    radius: 40,
    gradient: [
      'rgba(0, 0, 0, 0.0)',
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
        // super quick word cloud generation
        document.getElementById("word-cloud").innerHTML = "<img src='static/wordcloud.svg'>";

        var titles = document.getElementById('titles');
        var html = '<h3>Headlines</h3><ul>';
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
