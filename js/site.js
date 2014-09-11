$(document).ready(function(){

  var key = window.location.search.replace('?', '').replace('/', '');
  if(key.length>0) {
    console.log(key);
    mapIt(key);
  }
  
  function mapIt(key){
    Tabletop.init( { 
      key: key,
      callback: function(data, tabletop) { 
        console.log(data, tabletop);

        // set map name with sheetname
        var info = document.getElementById('info');
        info.innerHTML = '<p>Search for <strong>'+tabletop.foundSheetNames[0]+'</strong><a class="btn add" href="https://docs.google.com/spreadsheets/d/'+tabletop.key+'/edit#gid=0" target="_blank">Add A Point</a></p>';

        var map = L.map('map').setView([0,0],1);
        var points = L.featureGroup();
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png').addTo(map);

        for(var i=0;i<data.length;i++) {
          var marker = L.marker([parseFloat(data[i].lat), parseFloat(data[i].lng)]);
          marker.bindPopup('<strong>'+data[i].notes+'</strong><br><em>Posted By: '+data[i].entryby);
          points.addLayer(marker);
        }

        var overlayMaps = {
          "Points": points
        };

        L.control.layers(false, overlayMaps).addTo(map);
        map.addLayer(points);
        
        var bounds = points.getBounds();
        map.fitBounds(bounds, {padding:[10,10]});

        map.setView(map.getCenter());

      },
     simpleSheet: true } );
  }
  

});