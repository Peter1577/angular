import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signup=new FormGroup({
    Fname:new FormControl('',[Validators.required]),
    Lname:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.email,Validators.required]),
    Mnumber:new FormControl('',[Validators.required,Validators.minLength(10)]),
  })

  Signup(){
    console.log(this.signup.value);
    
  }
 get Fname(){
  return this.signup.get("Fname");
 }

 get Lname (){ 
  return this.signup.get("Lname");
}
get Email(){
  return this.signup.get("Email");
}
get Mnumber(){
  return this.signup.get("Mnumber");
}
}
