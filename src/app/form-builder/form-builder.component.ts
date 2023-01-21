import { Component } from '@angular/core';

interface Ia{
  name:string|undefined,
  roll:number|undefined
}

interface Ib{
  marks:Array<number>|undefined,
  stu_names:Array<string>|undefined
}

interface ic extends Ia,Ib{

}


class student1 implements ic
{
constructor(){
  this.marks=[20,20,20];
  ui:String;
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
export class FormBuilderComponent {

  constructor(){}

  stu1 =  new student1();

    print(){
      console.log(this.stu1.marks);
    }





}
