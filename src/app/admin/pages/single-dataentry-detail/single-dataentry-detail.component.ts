import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-single-dataentry-detail',
  templateUrl: './single-dataentry-detail.component.html',
  styleUrls: ['./single-dataentry-detail.component.css']
})
export class SingleDataentryDetailComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  searchQR:any;
  value1:any;

  S_Date: any;
  E_Date: any;
  Diagnosis : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;

  datas : any;
  title = '';
  count_value = "0";

  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  table_value = '1';

  grouplist = [];

  activity_list = [];


  constructor(
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activity_list = [];
    this.route.params.subscribe(params => {
      let a = {
        _id : params.id
      }
      // this._api.new_groupdetail_list().subscribe(
      //   (response: any) => {
      //     
      //     this.grouplist = response.Data;
      //   }
      // );

      this._api.new_groupdetail_list().subscribe(
        (response: any) => {
          
          this.activity_list = response.Data;
        }
      );


      this._api.fetch_entry_detail_list(a).subscribe(
        (response: any) => {
          
          let temp = response.Data;
          // this.datas = response.Data;
          let ac = {
            user_id : temp.user_id,
            job_id : temp.job_id,
          }
          this._api.fetch_entry_detail_activity_list(ac).subscribe(
            (response: any) => {
              
              this.grouplist = response.Data;
            }
          );
          // this.fetch_detail('61e937f1f5b6e53ca97b79e7','Lift Well Details Entry');
          // this.rows = response.Data;
        }
      );
    })
  }


  fetch_detail(data,title,type){
    this.title = title;
    this.table_value = ""+type;
    // if(title == "PLUMB CHART READING"){
    //   this.table_value = '2';
    // }else if(title == "Plan of Lift Wall"){
    //   this.table_value = '3';
    // }else if(title == "RM Forms "){
    //   this.table_value = '4';
    // }
    // else{
    //   this.table_value = '1';
    // }

    this.grouplist.forEach(elements => {
      if(elements._id == data){
        this.rows = elements.data_store;
        ;
        this.count_value = ""+this.rows.length;
        ;
      }
    });







  }


  refresh(){
    window.location.reload();
  }

}
