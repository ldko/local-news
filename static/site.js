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

  geocoder.geocode( { address: sampleData[0].city }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        sampleData[0].location = results[0].geometry.location;

        // would plot after processing all points..
        plotData();
    }else{
        console.log('error: '+_stores[i].store+' status: '+status);
    }
  });
}


function plotData() {

  if(sampleData[0].netMood > 0) {
    positiveHeatmap = new google.maps.visualization.HeatmapLayer({
      data: [
        { location: sampleData[0].location, weight: sampleData[0].netMood }
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
        {location: sampleData[0].location, weight: sampleData[0].netMood}
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

function showPoints() {
  for(var i=0; i < sampleData.length; i++) {
    var marker = new google.maps.Marker({
      position: sampleData[i].location,
      map: map,
      title: sampleData[i].paper,
      animation: google.maps.Animation.DROP,
      data: sampleData[i]
    });

    marker.addListener('click', function() {
      // super quick word cloud generation ; )
      document.getElementById("word-cloud").innerHTML = "<img src='static/wordcloud.svg'>";

      var titels = document.getElementById('titles');
      var html = '<h3>Headlines</h3><ul>';
      for(var k=0; k < marker.data.headlines.length; k++) {
        html += '<li onClick="showRelated(\''+marker.data.headlines[k].title+'\');">'+marker.data.headlines[k].title+'</li>';
      }
      html+='</ul>';
      titles.innerHTML = html;
    });

  }
}

function showRelated(headline) {
  fetch('http://206.167.180.171:8080/related/20170727/'+encodeURIComponent(headline)).then(function(response) {
    var data = JSON.parse(response);

    var html = '<h3>Related</h3><ul>';
    for(var k=0; k < data.related.length; k++) {
      html += '<li>'+data.related[k][0]+': '+data.related[k][1]+'</li>';
    }
    html+='</ul>';
    document.getElementById('graphs').innerHTML = html;
  });
}
