import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const INCREMENT10 = 'INCREMENT10';
export const DECREMENT10 = 'DECREMENT10';

export function counterReducer(state: number = 0, action: Action): number {
    switch (action.type){
        case INCREMENT:
            return state + 1; // number es una variable primitiva y al hacer  +1 se esta creando uno nuevo y no mutando el anterior
        case DECREMENT:
            return state - 1;
        case INCREMENT10:
            return state + 10;
        case DECREMENT10:
            return state - 10;
        case RESET:
            return 0;
        default:
            return state;
    }
}