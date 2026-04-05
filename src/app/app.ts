import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Decrement, Increment, Reset } from './store/counter.action';
import { Observable } from 'rxjs';
import { selectCounter} from './store/counter.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  counter$! :Observable<number>
  
  constructor(
    private store: Store<any>
  ){
    this.counter$ = this.store.select(selectCounter)
  }

  Inc(){
    this.store.dispatch(Increment());
  }

  dec(){
    this.store.dispatch(Decrement());
  }

  reset(){
    this.store.dispatch(Reset());
  }

}
