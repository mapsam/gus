$(document).ready(function(){

  $('#submit').on('click', function(){
    mapIt($('#key').val());
  });
  
  function mapIt(key){
    Tabletop.init( { 
      key: key,
      callback: function(data, tabletop) { 
        var map = L.map('map').setView([0,0],7);
        var points = L.layerGroup();
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png').addTo(map);

        for(i=0;i<data.length;i++) {
          var marker = L.marker([parseFloat(data[i].lat), parseFloat(data[i].lng)]);
          marker.bindPopup('<strong>'+data[i].notes+'</strong><br><em>Posted By: '+data[i].entryby);
          points.addLayer(marker);
        }

        var overlayMaps = {
          "Points": points
        };

        L.control.layers(false, overlayMaps).addTo(map);

        // map.fitBounds(map.getBounds(points));
      },
     simpleSheet: true } );
  }
  

});