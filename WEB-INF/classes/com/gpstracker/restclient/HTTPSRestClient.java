package com.gpstracker.restclient;

import java.io.IOException;

import com.google.maps.GeoApiContext;
import com.google.maps.PendingResult;
import com.google.maps.RoadsApi;
import com.google.maps.errors.ApiException;
import com.google.maps.model.LatLng;
import com.google.maps.model.SnappedPoint;

public class HTTPSRestClient {

	
	public static void main(String[] args) {
		GeoApiContext context = new GeoApiContext().setApiKey("AIzaSyAz9-vrux41Esxf1fGdKPWEzEcecE3jTaM");
		LatLng[] latlng = new LatLng[6];
		latlng[0] = new LatLng(-33.866808,151.195103);
		latlng[1] = new LatLng(-33.867137,151.195371);
		latlng[2] = new LatLng(-33.867378,151.195521);
		latlng[3] = new LatLng(-33.867609,151.195714);
		latlng[4] = new LatLng(-33.86777,151.195908);
		latlng[5] = new LatLng(-33.868001,151.196047);

		//["-33.866808,151.195103", "-33.867137,151.195371", "-33.867378,151.195521", "-33.867609,151.195714", "-33.86777,151.195908", "-33.868001,151.196047"]		
		PendingResult<SnappedPoint[]> result=	RoadsApi.snapToRoads(context,true, latlng);
		try {
			SnappedPoint[] array=result.await();
			System.out.println("res size:"+array.length);
			for(SnappedPoint point: array){
				System.out.println(point.location.toUrlValue());
			}
		} catch (ApiException e) {
			
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

}
