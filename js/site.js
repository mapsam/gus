$(document).ready(function(){
  Tabletop.init( { 
    key: '1SU4q9l75X20wbvIecroglqIJYyMXn5n6Tnx6lRG5E_A',
    callback: function(data, tabletop) { 
      console.log(data);
      var map = L.map('map').setView([45.96642454131025, -113.99414062499999],7);
      L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png').addTo(map);
      for(i=0;i<data.length;i++) {
        var marker = L.marker([parseFloat(data[i].lat), parseFloat(data[i].lng)]).addTo(map);
        marker.bindPopup('<strong>'+data[i].notes+'</strong><br><em>Posted By: '+data[i].entryby);
        console.log(marker);
      }

      map.on('contextmenu', function(e) {
        alert("Lat: " + e.latlng.lat + ", Lng: " + e.latlng.lng)
      });
    },
   simpleSheet: true } );

});