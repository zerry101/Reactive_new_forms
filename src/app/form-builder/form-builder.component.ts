import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Ia {
  name: string | undefined,
  roll: number | undefined
}

interface Ib {
  marks: Array<number> | undefined,
  stu_names: Array<string> | undefined
}

interface ic extends Ia, Ib {

}




class student1 implements ic {


  constructor() {
    this.marks = [20, 20, 20];
    ui: String;
  }
  name: string | undefined;
  roll: number | undefined;
  marks: number[] | undefined;
  stu_names: string[] | undefined;


}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  stu1 = new student1();

  print() {
    console.log(this.stu1.marks);
  }

  fillAdressObj: any = {
    username: "harry",
    password: "barry",
    confirmpassword: "barry",
    address: {
      street: "34",
      city: "surat",
      state:"MP",
      zip:"234567"
    }
  }

  userForm = this.fb.group({
    username: [""],
    password: [""],
    confirmpassword: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    })

  })


  formSubmit() {
    console.log(this.userForm.value);
  }

  autoFillFormAddress() {
    this.userForm.patchValue(this.fillAdressObj);
  }

  clear(){
    this.userForm.reset();
  }





}
