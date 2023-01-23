import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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


// ////////


////////////
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  username: any;
  submitted: boolean = false;



  fillAdressObj: any = {
    username: "harry",
    password: "barry",
    confirmpassword: "barry",
    address: {
      street: "34",
      city: "surat",
      state: "MP",
      zip: "234567"
    }
  }

  stu1 = new student1();
  userForm: FormGroup = new FormGroup({
    address: new FormGroup({})
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm();
  }

  print() {
    console.log(this.stu1.marks);
  }

  private setupForm() {
    this.userForm = this.fb.group({
      username: ["", Validators.required,Validators.minLength(4)],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required],
      address: this.fb.group({
        street: ["", Validators.required],
        city: ["", Validators.required],
        state: ["", Validators.required],
        zip: ["", Validators.required]
      })
    })
  }


  formSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.userForm.markAsDirty();
      return;
    }
    console.log(this.userForm.value);
    console.log(this.userForm.controls['address'].get('street'));
  }

  autoFillFormAddress() {
    this.userForm.patchValue(this.fillAdressObj);
  }

  clear() {
    this.userForm.reset();
  }


  get userNameControl() { return this.userForm.get('username'); }
  get passwordControl() { return this.userForm.get('password'); }
  get confirmPasswordControl() { return this.userForm.get('confirmpassword'); }
  get addressStreetControl() { return this.userForm.get('address')?.get('street');}
  get addressCityControl(){return this.userForm.get('address')?.get('city');}
  get addressStateControl(){return this.userForm.get('address')?.get('state');}
  get addressZipControl(){return this.userForm.get('address')?.get('zip');}

}
