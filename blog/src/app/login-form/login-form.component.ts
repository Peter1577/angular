import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  Loginform = new FormGroup({
  Name:new FormControl(''),
  password:new FormControl(''),
})
login(){
  console.log(this.Loginform.value);
  
}
}
