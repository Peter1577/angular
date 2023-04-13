import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ItemsList } from '../items-list';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit{

items : ItemsList[];
  constructor(private HI : DataServiceService) {
  }

  ngOnInit(): void {
      this.HI.getdetails("holiday").subscribe(items => this.items =items);
  }
}
