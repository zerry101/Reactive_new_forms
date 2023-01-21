import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from "@angular/forms";
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  // username=new FormControl("");
  // userForm:FormGroup | undefined;




  stateOptions: string[] = ["AO", "OP", "lP"];






  userForm: FormGroup = new FormGroup({
      username: new FormControl(""),
    password: new FormControl(""),
    confirmpassword: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl("")
    })
  });

  addressObj:any={
    street: "tui",
    city: "ahmedabad",
    state: this.stateOptions[0],
    zip: "380000"
    } ;



  autoFillAddress() {
  this.userForm.patchValue({
      address: this.addressObj
    })
  };

  name: any = new FormControl("");
  clear_name() {
    // 1 ->this.username.reset();
    //2  below
    this.name.setValue("");
  }

  submit() {
    console.log(this.userForm.value);

  }

  clear() {
    // 1 ->this.username.reset();
    //2  below
    this.userForm.reset();
  }


}
