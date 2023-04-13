import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit{
data:any[];
data2:any[];
constructor(private JD : DataServiceService){

}
  ngOnInit(): void {

    this.JD.getdatafromjson().subscribe({
      next:data => this.data = data,
      error: err => alert("data not found"),
      complete: ()=> console.log("complete"),
      
    }
    );
    this.JD.getdatafromjson1().subscribe(data2 => this.data2=data2);
  }

}
