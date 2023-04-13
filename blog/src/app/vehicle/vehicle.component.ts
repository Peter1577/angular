import { Component } from '@angular/core';
import { VehicleList } from '../vehicle-list';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles : VehicleList[] = [
    {id:101223,type:"two wheeler",color:"white"},
    {id:101224,type:"four wheeler",color:"grey"},
    {id:101225,type:"three wheeler",color:"black"},
  ]

}
