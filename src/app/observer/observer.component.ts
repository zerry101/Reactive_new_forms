import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.myObservable.subscribe((val)=>{
    //   console.log(val);

    // })
  }

  myObservable:Observable<any> = new Observable((Observer) => {
    console.log("Observable starts");
    // setTimeout(()=>{Observer.next("1");},1000);
    // setTimeout(()=>{Observer.next("2");},2000);
    // setTimeout(()=>{Observer.next("3");},3000);
    // setTimeout(()=>{Observer.next("4");},4000);
    // setTimeout(()=>{Observer.next("5");},5000);

    Observer.next("2");
    Observer.next("3");
    Observer.next("4");
    Observer.next("5");
  })




}
