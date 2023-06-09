import { Component, OnInit,Input,Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {CDK_DROP_LIST} from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-service-column-popup',
  templateUrl: './service-column-popup.component.html',
  styleUrls: ['./service-column-popup.component.css']
})
export class ServiceColumnPopupComponent implements OnInit {


  pre:any;
  activeCustomers = [];

  inactiveCustomers = [];
  constructor(public dialogRef: MatDialogRef<ServiceColumnPopupComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.activeCustomers = data[0];
    this.inactiveCustomers =data[1];
    }
   

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.pre = `
activeCustomers:
${JSON.stringify(this.activeCustomers, null, ' ')}

inactiveCustomers:
${JSON.stringify(this.inactiveCustomers, null, ' ')}`;
  }
  Save(){
 
   sessionStorage.setItem('header', JSON.stringify(this.activeCustomers));
   sessionStorage.setItem('pre',this.pre)
    this.dialogRef.close();
  }
}
