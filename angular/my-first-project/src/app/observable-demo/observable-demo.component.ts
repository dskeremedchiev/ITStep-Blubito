import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit, OnDestroy {
  private myTestSubscription: Subscription | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('observables start');
    // this.myTestSubscription = interval(1000).subscribe( count=>{
    //   console.log(count);
    // })
    //const customIntervalObservable = Observable.create(()=>);
    const customIntervalObservable = new Observable( observer=>{
      let count = 5;
      setInterval(()=>{
        observer.next(count);
        count--;
        if(count<0){
          observer.error(new Error('Counter is negative'));
        }
        if(count===0){
          observer.complete();
        }
      },1000);
    });
    // old school syntax
    // this.myTestSubscription = customIntervalObservable.subscribe(
    // data=>{
    //   console.log(data);
    // }, 
    // error =>{
    //   console.log(error);
    //   alert(error);
    // },
    // ()=>{
    //   console.log('Counter completed');
    // }
    // );
    this.myTestSubscription = customIntervalObservable.subscribe(
    {
      next: data=>{
          console.log(data);
      },
      error: error=>{
        console.log(error);
        alert(error);      
      },
      complete: ()=>{
        console.log('Counter completed');
      }
    });
  }
  ngOnDestroy(): void {
    if(this.myTestSubscription) this.myTestSubscription.unsubscribe();
  }
}
