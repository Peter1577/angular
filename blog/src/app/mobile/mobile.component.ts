import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ProductList } from '../product-list';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  products:ProductList[];

  constructor(private ms:DataServiceService){
  }
  ngOnInit(): void {
    this.ms.getproducts("mobile").subscribe(products => this.products = products);
  }
}
