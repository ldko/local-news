var map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 37.09024, lng: -95.712891},
    mapTypeId: 'roadmap',
    styles: customMapStyle
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: [],
    map: map
  });
}