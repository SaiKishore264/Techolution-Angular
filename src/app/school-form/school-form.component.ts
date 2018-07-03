import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css']
})
export class SchoolFormComponent implements OnInit {
  firstName: string;
  lastname: string;
  class: string;
percentage: string;
yop: number;
submitBtn :boolean = false;
  constructor() { }


  onKeyUpValidation(){
    if(this.firstName && this.lastname && this.class && this.percentage && this.yop){
      if(this.firstName.length > 1 && this.firstName.length <= 20 && this.lastname.length > 1 && this.lastname.length <= 20 && this.class.length > 1 && this.percentage.length > 1 && this.yop < 2018 && this.yop > 1980){
        this.submitBtn = true;
      }
      else{
        this.submitBtn = false;
      }
    }
  }
  ngOnInit() {
   
  }
 submit(){
    alert("Vaild");
  }
 

}
