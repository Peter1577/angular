import { Component, OnInit } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { ProductList } from '../product-list';

@Component({
  selector: 'app-bluetooths',
  templateUrl: './bluetooths.component.html',
  styleUrls: ['./bluetooths.component.css']
})

export class BluetoothsComponent implements OnInit {
  products:ProductList[];

constructor(private bs:DataServiceService){
}

ngOnInit(): void {
    this.bs.getproducts("bluetooth").
    subscribe(products => this.products = products);
}
}
