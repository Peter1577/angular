import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  usersignin(item:any){
    console.log(item);
    
  }

  submitone(message:any){
    console.log(message);
    
  }

  submittwo(message:any){
    console.log(message);
    
    
  }

}
