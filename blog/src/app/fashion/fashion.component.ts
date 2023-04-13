import { Component } from '@angular/core';
import { FashionDetails } from '../fashion-details';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {

  fashions: FashionDetails[] = [
    {id:201,brand:"zara",type:"foot-ware"},
    {id:202,brand:"peter england",type:"Tshirt"},
    {id:203,brand:"tommy",type:"pant"},
  ] 

}
