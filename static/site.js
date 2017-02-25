var map, negativeHeatmap, positiveHeatmap, geocoder;
var markers = [];
var geoKey = 'AIzaSyCxp9fIGK9GddYNvYLToye8vfDXNXfS_v4';

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

  var index = 0;
  var total = sampleData.length-1;
  var doProcess = function () {
    if(index==total)
      return plotData();

    // check for locally cached geos
    var geos = JSON.parse(localStorage.geos || "{}");
    if(typeof geos[sampleData[index].city] !== "undefined") {
      var loc = geos[sampleData[index].city];
      sampleData[index].location = new google.maps.LatLng(loc.lat, loc.lng);
      index++;
      return doProcess();
    }

    geocoder.geocode( { address: sampleData[index].city }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

          var cache = JSON.parse(localStorage.geos || "{}");
          cache[sampleData[index].city] = results[0].geometry.location;
          localStorage.geos = JSON.stringify(cache);
          console.log('caching ', sampleData[index].city);

          sampleData[index].location = results[0].geometry.location;
      } else {
          console.log('error: '+status);
      }

      setTimeout(doProcess, 500);
      index++;
    });
  }

  doProcess();
}


function plotData() {

  for(var i=0; i < sampleData.length; i++) {
    // skip other date for now
    if(sampleData[i].date !== '201607271') continue;

    if(sampleData[i].netMood > 0) {
      positiveHeatmap = new google.maps.visualization.HeatmapLayer({
        data: [
          { location: sampleData[i].location, weight: sampleData[i].netMood }
        ],
        map: map,
        radius: 40,
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
        data: [
          {location: sampleData[i].location, weight: Math.abs(sampleData[i].netMood) }
        ],
        map: map,
        radius: 40,
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
  if(markers.length) return;

  for(var i=0; i < sampleData.length; i++) {
    if(sampleData[i].date !== '201607271') continue;

    markers.push(new google.maps.Marker({
      position: sampleData[i].location,
      map: map,
      animation: google.maps.Animation.DROP,
      data: sampleData[i].headlines
    }));

    google.maps.event.addListener(markers[markers.length-1], 'click', function() {
      // clear out related
      document.getElementById('graphs').innerHTML = "";

      // super quick word cloud generation ; )
      document.getElementById("word-cloud").innerHTML = "<img src='static/wordcloud.svg'>";
      var titels = document.getElementById('titles');
      var html = '<h3>Headlines</h3><ul>';
      for(var k=0; k < this.data.length; k++) {
        html += '<li onClick="showRelated(\''+this.data[k].title+'\');">'+this.data[k].title+'</li>';
      }
      html+='</ul>';
      titles.innerHTML = html;
    });

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
