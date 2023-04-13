import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-buletooth-details',
  templateUrl: './buletooth-details.component.html',
  styleUrls: ['./buletooth-details.component.css']
})
export class BuletoothDetailsComponent implements OnInit {

  bluetoothsid:string;
  constructor (private Route:ActivatedRoute){

  }

  ngOnInit(): void {
      alert("information for ngoninit is called");
      this.bluetoothsid=this.Route.snapshot.paramMap.get("id");
  }
}
