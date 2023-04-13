import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { ItemsList } from '../items-list';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit{

items : ItemsList[]
constructor(route:ActivatedRoute , private IS:DataServiceService ){
}

ngOnInit(): void {
    this.IS.getdetails('hotel').subscribe(items => this.items =items);
}
}
