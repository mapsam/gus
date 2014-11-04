$(document).ready(function(){
  getSpreadsheet(getID());
});

function getID() {
  var key = window.location.search.replace('?', '').replace('/', '');
  if(key.length>0) {
    return key;  
  } else {
    setForm();
  }
}

function getSpreadsheet(key){
  Tabletop.init( { 
    key: key,
    callback: buildMap,
    simpleSheet: true
  });
}

function buildMap(data, tabletop) {
  
  // set map name with sheetname
  var info = document.getElementById('info');
  info.innerHTML = '<p>Map for <strong>'+tabletop.foundSheetNames[0]+'</strong><a class="btn add" href="https://docs.google.com/spreadsheets/d/'+tabletop.key+'/edit#gid=0" target="_blank">Add A Point</a></p>';

  // build sidebar

  // build map
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

  map.on('click', function(e) {
    var coords = document.getElementById('coords');
    coords.innerHTML="<p>Lat: <strong>" + e.latlng.lat + "</strong>, Lng: <strong>" + e.latlng.lng+"</strong>";
  });
}

function setForm() {
  var wrapper = document.createElement('div');
  wrapper.className = 'form-wrapper';
  var form = document.createElement('form');
  form.id = 'unique-id';
  form.innerHTML = '<input type="text" id="unique-id-value" value="" placeholder="Enter your unique ID"><input id="unique-id-submit" type="submit" value="submit">';
  wrapper.appendChild(form);
  document.body.appendChild(wrapper);

  $('body').on('click', '#unique-id-submit', function() {
    window.location.href = document.location + '?' + $('#unique-id-value').val();
    return false;
  });
}

function showErrors(err) {
  console.log(err);
}