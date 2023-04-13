import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ProductList } from '../product-list';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {

  products:ProductList[];

  constructor(private sk:DataServiceService){

  }

  ngOnInit(): void {
      this.sk.getproducts('skin').
      subscribe(products => this.products = products );
  }
}
