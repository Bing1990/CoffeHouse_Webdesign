function init() {
	//alert("ready");
	var mapOptions = {
		center: new google.maps.LatLng(41.856929, -87.639263),
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.MAP,
		mapTypeControl: true,
	};

	var mapCanvas = document.getElementById('map-div');

	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker = new google.maps.Marker({
    	map: map,
    	position: new google.maps.LatLng(41.856929, -87.639263),
    	animation: google.maps.Animation.DROP
    
    });

    var windowContent = '<div id="Coffee-info"><h1>Coffee house: E1</h1><p>11826 S Canal St Chicago, IL 60616<br>Chicago, IL 60616<br>Phone: 800-555-1825</p></div>';

    var infowindow = new google.maps.InfoWindow({
            content: windowContent
        });

    google.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map, marker);
    });

    // Geolocation below
    function moveMap(loc){
      //console.log(loc);
      map.panTo(new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude));
      map.setZoom(18);
    }

    document.getElementById('mylocation-btn').addEventListener('click', function(){
    	navigator.geolocation.getCurrentPosition(moveMap);
    });

    document.getElementById('textbox-btn').addEventListener('click', function(){
      var address = document.getElementById('address-textbox').value;
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address':address}, function(results, status){
        if (status === google.maps.GeocoderStatus.OK) {
          map.panTo(results[0].geometry.location);
          map.setZoom(18);
        } else {
          alert('Can not locate address');
        }
      });
    });
}

google.maps.event.addDomListener(window, 'load', init);





