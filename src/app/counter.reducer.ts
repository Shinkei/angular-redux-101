import { Action } from '@ngrx/store';


export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action): number {
    switch (action.type){
        case INCREMENT:
            return state + 1; // number es una variable primitiva y al hacer  +1 se esta creando uno nuevo y no mutando el anterior
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}