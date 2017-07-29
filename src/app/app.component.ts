import { AppState } from './reducers'; 
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

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
}
