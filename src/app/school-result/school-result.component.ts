import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-school-result',
  templateUrl: './school-result.component.html',
  styleUrls: ['./school-result.component.css']
})

export class SchoolResultComponent implements OnInit {
  data;
  studentResults: any;
  studentName: String;
  total = [];
  totalMarks: number;
  students = [];
  max:number =0;
  maxMarks: any;
  
  constructor(private http: HttpClient) {
  }

  getStudentResults() {
    return this.http.get('../assets/data.json')
      .toPromise().then(res => {
        return res
      }
      )
  }
  ngOnInit() {
    this.getStudentResults().then(
      res => {
        this.studentResults = res;
        if (this.studentResults) {
          let result;
          for (let i = 0; i < this.studentResults.length; i++) {
            this.totalMarks = parseInt(this.studentResults[i].marks.English) + parseInt(this.studentResults[i].marks.Maths) + parseInt(this.studentResults[i].marks.Science);
            if (this.totalMarks >this.max) {
              this.max=this.totalMarks;
              this.maxMarks=this.totalMarks;
             } 
            if (this.studentResults[i].marks.English < 20 || this.studentResults[i].marks.Maths < 20 || this.studentResults[i].marks.Science < 20) {
              result = "fail";
            }
            else {
              result = "pass";
            }
            this.students.push({ 'rollNumber': this.studentResults[i].rollNumber, 'total': this.totalMarks, 'result': result, 'student': this.studentResults[i] });
          }
          for (let i = 0; i < this.students.length; i++) {
            if(this.maxMarks == this.students[i].total){
          this.students[i].result = "topper";
            }
          }
          console.log(this.students);
          console.log(this.maxMarks);
          // var sorted = this.students.sort(); 
          // console.log("Returned string is : " + sorted );
          
          
        }
      }

    )

 
  }

}
