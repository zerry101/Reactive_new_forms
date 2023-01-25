import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent {
@Input () public parentData:string | undefined="hiii";
@Output() public ChildEt:EventEmitter<any>=new EventEmitter();

passToParentData(){
this.ChildEt.emit("child data value here ");
}
}
