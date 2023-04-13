import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Registration = new FormGroup({
  Fname : new FormControl('',[Validators.required]),
  Lname : new FormControl('',[Validators.required]),
  Email : new FormControl('',[Validators.required,Validators.email]),
  Mnum : new FormControl('',[Validators.required,Validators.minLength(9)]),
  password : new FormControl('',[Validators.required ,Validators.minLength(8)]),
  })
  get Fname(){
    return this.Registration.get("Fname");
  }
  get Lname(){
    return this.Registration.get("Lname");
  }
  get Email(){
    return this.Registration.get("Email");
  }
  get Mnum(){
    return this.Registration.get("Mnum");
  }
  get password(){
    return this.Registration.get("password");
  }
  Register(){
    console.log(this.Registration.value);
    
  }
}
