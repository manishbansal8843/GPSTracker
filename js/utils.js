	var lat=30.653490599999998;
	var long=76.811826;
function getUserLocation(){
	var x = document.getElementById("header");


	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function (position){
	        	return new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	        });
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser. Updating location automatically";
	        lat=((lat*1000000)+50)/1000000;
	        long=((long*1000000)+50)/1000000;
	        return new google.maps.LatLng(lat,long);
	    }
	
}

function getAutoUserLocation(){
	var x = document.getElementById("header");
 
	        x.innerHTML = "Geolocation is not supported by this browser. Updating location automatically";
	        lat=((lat*1000000)+50)/1000000;
	        long=((long*1000000)+50)/1000000;
	        return new google.maps.LatLng(lat,long);
	    
	
}

function changeInCoordinates(initialcoordinates,finalcoordinates){
	var iLong=initialcoordinates.lng();
	var iLat=initialcoordinates.lat();
	var fLong=finalcoordinates.lng();
	var fLat=finalcoordinates.lat();
	
	if(Math.abs(iLong*1000000-fLong*1000000)>50 || Math.abs(iLat*1000000-fLat*1000000)>50){
		return true;
	}
	else
		return false;
}