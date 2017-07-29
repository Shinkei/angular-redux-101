import { AppState } from './reducers'; 
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { INCREMENT, DECREMENT, RESET, INCREMENT10, DECREMENT10 } from './counter.reducer'; // import the actions from the reducer to be used here to dispatch

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  counter: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter = store.select<number>((state: AppState) => { // me subscribo al store para que me avise del cambio de counter
      return state.counter;
    });
  }

  increment(){
    this.store.dispatch({type: INCREMENT});
  }

  decrement(){
    this.store.dispatch({type: DECREMENT});
  }

  reset(){
    this.store.dispatch({type: RESET});
  }

  increment10(){
    this.store.dispatch({type: INCREMENT10});
  }

  decrement10(){
    this.store.dispatch({type: DECREMENT10});
  }

}
