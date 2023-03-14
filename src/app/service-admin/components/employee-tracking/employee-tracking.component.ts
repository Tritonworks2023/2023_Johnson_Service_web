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
 usermobileno:any;
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
    
    this.rows = response.Data;


    

    this.rows.map((e:any)=>{
      // marker array push
      this.markers.push({
      lat: e.loc_lat,
      lng: e.loc_long,
      job_no:e.job_no,
      location_text:e.location_text,
      user_mobile_no:e.user_mobile_no
       })

       //km compare push
       this.comparekmvalue.push({
        lat: e.loc_lat,
        lng: e.loc_long,
        job_no:e.job_no,
        location_text:e.location_text,
       })

    });

    if(this.markers.length > 1){
      this.origin = { lat: Number(this.markers[0].lat) , lng: Number(this.markers[0].lng)};
      this.destination = { lat: Number(this.markers[1].lat) , lng: Number(this.markers[1].lng)};
     }



    if(this.markers.length >= 2){
      this.markers.map((aa:any,i)=>{
        if(i>1){
           this.waypoints.push({location: { lat: Number(aa.lat), lng: Number(aa.lng) }})  
        }
      })
    }

   


        this.comparekmvalue.push({
          lat: 0,
          lng: 0,
          job_no:0,
          location_text:"chennai",
         })
         this.comparekmvalue.shift();

         

         var index = 0;
         this.recall(index);
         
        

      }
    
    
      );
  }

    recall(index){
    
    const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();


    let i = index;
    if(i < this.markers.length){
    let aa = this.markers[i];
    this.lat1= aa.lat ; this.lng1= aa.lng;this.lat2= this.comparekmvalue[i].lat; this.lng2= this.comparekmvalue[i].lng;
    // build request
    const origin1 = { lat: Number(this.lat1), lng: Number(this.lng1) };
    const origin2 = aa.location_text;
    const destinationA =this.comparekmvalue[i].location_text;
    const destinationB = { lat: Number(this.comparekmvalue[i].lat), lng: Number(this.comparekmvalue[i].lng) };
    const request = {
      origins: [origin1, origin2],
      destinations: [destinationA, destinationB],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };

    service.getDistanceMatrix(request).then((response) => {
      var newarr = response.rows[0].elements[0].distance.text.split(" ");
      this.km = +newarr[0];
      this.calckmValue.push(this.km);
      this.total_km = this.total_km + this.km;
      index = index + 1;
      this.recall(index);
    });
     }
     else {
    
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
  
  
}