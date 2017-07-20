var lat=30.653490599999998;
       var long=76.811826;
       var localInitialCoordinates;
       var localFinalCoordinates;
 
       var coordinates=[];
       var polyline;
       var map;
       var lineSymbol = {
                 path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
               };
       var markerBounds = new google.maps.LatLngBounds();
      
function getUserLocationFirstTime(){
       var x = document.getElementById("header");
 
 
           if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(function (position){
              
 
 
                     localInitialCoordinates= new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                     coordinates=[];
                     coordinates.push(localInitialCoordinates);

 
                     if(map!=undefined){
                    	 console.log('userlocation before calling first fitbound');
                         markerBounds.extend(localInitialCoordinates);
                         map.fitBounds(markerBounds);
                         console.log('userlocation after calling first fitbound. bounds are:'+map.getBounds());
 
                     }
                     });
           } else {
               x.innerHTML = "Geolocation is not supported by this browser. Updating location automatically";
               lat=((lat*1000000)+50)/1000000;
               long=((long*1000000)+50)/1000000;
               localInitialCoordinates= google.maps.LatLng(lat,long);
               coordinates=[];
              coordinates.push(localInitialCoordinates);
           }
 
}
 
function getUserLocationOtherwise(){
       var x = document.getElementById("header");
 
 
           if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(function (position){
              
 
 
                    
                     localFinalCoordinates= new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                     if(changeInCoordinates(localInitialCoordinates,localFinalCoordinates)){
                           
                            localInitialCoordinates=localFinalCoordinates;
                            coordinates.push(localInitialCoordinates);
                            updateMap();
                     }
                    
               });
           } else {
               x.innerHTML = "Geolocation is not supported by this browser. Updating location automatically";
               lat=((lat*1000000)+50)/1000000;
               long=((long*1000000)+50)/1000000;
               localFinalCoordinates= new google.maps.LatLng(lat,long);
               if(changeInCoordinates(localInitialCoordinates,localFinalCoordinates)){
                    
                     localInitialCoordinates=localFinalCoordinates;
                     coordinates.push(localInitialCoordinates);
                     updateMap();
              }
               }
 
}
function getAutoUserLocationFirstTime(){
       var x = document.getElementById("header");
 
               x.innerHTML = "Geolocation is not supported by this browser. Updating location automatically";
               lat=((lat*1000000)+50)/1000000;
               long=((long*1000000)+50)/1000000;
               localInitialCoordinates= new google.maps.LatLng(lat,long);
              coordinates=[];
              coordinates.push(localInitialCoordinates);
              //console.log('Autouserlocation intial fitbound code start');
 
              //initialFitBound.north=localInitialCoordinates.lng()-1;
              //initialFitBound.south=localInitialCoordinates.lng()+1;
              //initialFitBound.east=localInitialCoordinates.lat()-1;
 
              //initialFitBound.west=localInitialCoordinates.lat()+1;
 
              //console.log('Autouserlocation intial fitbound:'+initialFitBound);
 
              if(map!=undefined){
                     console.log('Autouserlocation before calling first fitbound');
                     markerBounds.extend(localInitialCoordinates);
                     map.fitBounds(markerBounds);
                     console.log('Autouserlocation after calling first fitbound. bounds are:'+map.getBounds());
 
              }
 
}
 
function getAutoUserLocationOtherwise(){
       var x = document.getElementById("header");
 
               x.innerHTML = "Geolocation is not supported by this browser. Updating location automatically";
               lat=((lat*1000000)+60)/1000000;
               long=((long*1000000)+60)/1000000;
               localFinalCoordinates= new google.maps.LatLng(lat,long);
               if(changeInCoordinates(localInitialCoordinates,localFinalCoordinates)){
                    
                     localInitialCoordinates=localFinalCoordinates;
                     coordinates.push(localInitialCoordinates);
                     updateMap();
              }
 
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
 
 
 function onloadfunc(){
        getUserLocationFirstTime();
       initialize();
       // getAutoUserLocationFirstTime();
 
       setTimeout(getlocation,3000);
}
function initialize(){
       var mapOptions = {
                  zoom: 17,
                  center: new google.maps.LatLng(lat,long)
                };
                map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
function getlocation(){
 
        getUserLocationOtherwise();
       //getAutoUserLocationOtherwise();
      
       setTimeout(getlocation,3000);
}
function updateMap(){
       if(polyline!=undefined)
              polyline.setMap(null);
        polyline = new google.maps.Polyline({
                  path: coordinates,
                  icons: [{
                   icon: lineSymbol,
                   offset: '100%'
                 }],
                  strokeColor: 'black',
                  strokeWeight: 3
                });
       // map.setCenter(localInitialCoordinates);
        console.log(map.getBounds());
        markerBounds.extend(localInitialCoordinates);
              map.fitBounds(markerBounds);
                polyline.setMap(map);
             
}