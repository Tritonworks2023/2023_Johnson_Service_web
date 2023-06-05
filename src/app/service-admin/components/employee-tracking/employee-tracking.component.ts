import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ToastrManager } from 'ng6-toastr-notifications';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeTrackingeditComponent } from '../../employee-trackingedit/employee-trackingedit.component';
import { GeocodeService } from 'src/app/geocode.service';





// declare module 'googlemaps';
declare var google: any;
@Component({
  selector: 'app-employee-tracking',
  templateUrl: './employee-tracking.component.html',
  styleUrls: ['./employee-tracking.component.css']
})
export class EmployeeTrackingComponent implements OnInit {
 // google maps zoom level
  origin;
  destination;
  waypoints=[];
 zoom: number = 8;
 markers: marker[] = []
 // initial center position for the map
 lat: number = 51.673858;
 lng: number = 7.815982;
 rows:any;
 usermobileno: any = 'E13528';
 jobno:any;
 employeetable;
 lat1: number;
 lng1: number;
 lat2: number;
 lng2: number;
 km: number;
 comparekmvalue=[];
 calckmValue=[];
 removecalvalue=[];

 total_km = 0;
 
renderOptions = {
  suppressMarkers: true,
}
current_date = new Date();

 constructor(private router:Router, private geocodeService:GeocodeService,private toastr:ToastrManager,private _api: ApiService, public dialog: MatDialog) { }

  ngOnInit(){
   


   
 


  }
employee_search()
{
  // this.getDistanceFromLatLonInKm();
  this.employeetable=true;


  let a = {
    "user_mobile_no":this.usermobileno,
    "current_date" : this.current_date
  }
  
  this.calckmValue=[];
  this.comparekmvalue=[];
  this.markers=[];
  this.waypoints=[];

  this.total_km = 0;

this._api.employee_tracking(a).subscribe(
  (response: any) => {
    this.rows = [];
    var index_value = 0;
    response.Data.forEach((element, idx) => {
         if(+element.loc_lat !== 0){
           element.lat_value = +element.loc_lat;
           element.long_value = +element.loc_long;
           element.index = index_value;
           element.kmss = 0;
           element.address = +element.location_text;
           this.rows.push(element);
           this.markers.push({
            lat: element.loc_lat,
            lng: element.loc_long,
            label : ""+index_value,
            job_no: element.job_no,
            location_text: element.location_text,
            user_mobile_no: element.user_mobile_no,
            kms : 0,
            index : index_value,
             });
             index_value = index_value + 1;
            }
    });

    if(this.markers.length > 1){
      this.origin = { lat: Number(this.markers[0].lat) , lng: Number(this.markers[0].lng)};
      this.destination = { lat: Number(this.markers[0].lat) , lng: Number(this.markers[0].lng)};
      console.log(this.origin);
      console.log(this.destination);
     }

   
    console.log(this.markers); 
    console.log(this.waypoints);
    this.total_km = 0; 
    var index = 0;
    this.recall(index);
      }
      );
  }

    recall(index){
    const service = new google.maps.DistanceMatrixService();
    let i = index;
    if(i < this.markers.length - 1){
    let aa = this.markers[i];
    let bb = this.markers[i + 1];
    this.lat1 = +aa.lat; 
    this.lng1 = +aa.lng;
    this.lat2 = +bb.lat; 
    this.lng2 = +bb.lng;
    console.log(this.lat1,this.lng1,this.lat2,this.lng2);
    // build request
    const request = {
      origins: [{lat: this.lat1, lng: this.lng1}],
      destinations: [{lat: this.lat2, lng: this.lng2}],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };
    // console.log(request);

    service.getDistanceMatrix(request).then((response) => {
      console.log(response);
      var newarr = response.rows[0].elements[0].distance.value;
      this.km = +newarr;
      console.log("Calculate KM",this.km);
      if(this.km !== 0){
        this.origin = { lat: Number(this.lat1) , lng: Number(this.lng1)};
        this.destination = { lat: Number(this.lat2) , lng: Number(this.lng2)};
        this.waypoints.push({location: { lat: Number(this.lat1), lng: Number(this.lng1)}});
      }
      this.total_km = this.total_km + this.km;
      this.markers[i + 1].kms = this.km / 1000;
      this.rows[i + 1].kms =  this.km / 1000;
      // this.calckmValue.push(this.km);
      // this.total_km = this.total_km + this.km;
      index = index + 1;
      this.recall(index);
    });
     }
     else {
      console.log(this.waypoints);
      this.total_km = this.total_km / 1000;
      this.total_km = Math.round(this.total_km);
     }
   
   }



    




  clickedMarker(label: string, index: number) {
  }
  
  mapClicked($event: MouseEvent) {
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
  }
getDistanceFromLatLonInKm() {
 
    var deg2Rad = deg => {
        return deg * Math.PI / 180;
    }
 
    this.lat1= 8.186086238957166 ; this.lng1= 77.4093668863787;this.lat2=  8.188438713980196; this.lng2= 77.42146405971492;
    var r = 6371; 
      var dLat = deg2Rad(this.lat2 - this.lat1);   
    var dLon = deg2Rad( this.lng2- this.lng1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2Rad(this.lat1)) * Math.cos(deg2Rad(this.lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    this.km= r * c; // Distance in km
   
}

  employeepopup(item) {
    const dialogRef = this.dialog.open(EmployeeTrackingeditComponent, {
      width: '300px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(password => {




    });
  }

  refersh()
  {
    
  }
  locationmap(e:any){
    this.geocodeService.geocodeAddress(e.location_text)
    .subscribe((location: any) => {
      let a={
        "_id":e._id,
       "loc_long":location.lng,
        "loc_lat":location.lat,
      }
      this._api.employee_jobwise(a)
      .subscribe((data: any) => {
       
        this.employee_search();     
    })
            
  })

}











}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  job_no?:string;
  location_text?:string;
  user_mobile_no:number;
  index : number;
  label : String;
  kms : number;
  
  
}