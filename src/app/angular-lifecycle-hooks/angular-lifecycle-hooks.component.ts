import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-angular-lifecycle-hooks',
  templateUrl: './angular-lifecycle-hooks.component.html',
  styleUrls: ['./angular-lifecycle-hooks.component.scss']
})
export class AngularLifecycleHooksComponent {
  @Input() Inp: string | undefined = "hii";
  @Output() public Outp: EventEmitter<any> | undefined = new EventEmitter();
  emitData() {
    this.Outp?.emit("hii");
  }

  cpt: number = 1;
  inc() {
    this.cpt++;
  }

  ngOnChanges(changes:SimpleChange) {
    console.log('ngOnChanges()',changes);

  }
  ngOnInit() {
    console.log('ngOnInit()');
  }
  ngDoCheck() {
    console.log('ngDoCheck()');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }



}
