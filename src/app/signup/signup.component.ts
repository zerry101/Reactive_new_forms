import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  username:any=new FormControl("");

  clear(){
    // 1 ->this.username.reset();
    //2  below
    this.username.setValue("");
  }

}
