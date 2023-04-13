import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.css']
})
export class MobileDetailsComponent implements OnInit{

  mobilemodel:string;
  constructor(private router :ActivatedRoute, private ds:DataServiceService){

  }
  ngOnInit(): void {
    this.mobilemodel = this.router.snapshot.paramMap.get("model");
  
  }

}
