import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ProductList } from '../product-list';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit{
  products:ProductList[];
constructor(private LS : DataServiceService){
}

ngOnInit(): void {
  this.LS.getproducts("Laptop").subscribe(products => this.products = products);
}
}
