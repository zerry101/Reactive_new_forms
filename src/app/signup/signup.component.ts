import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  name:any=new FormControl("");
// username=new FormControl("");
  // userForm:FormGroup | undefined;


  clear_name(){
    // 1 ->this.username.reset();
    //2  below
    this.name.setValue("");
  }

  userForm:FormGroup=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),
    confirmpassword:new FormControl("")
  });


  submit()
  {
    console.log(this.userForm.value);

  }

  clear(){
    // 1 ->this.username.reset();
    //2  below
    this.userForm.reset();
  }


}
