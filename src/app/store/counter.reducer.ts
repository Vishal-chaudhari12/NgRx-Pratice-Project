import { createReducer ,on, State } from "@ngrx/store";
import { Increment,Decrement,Reset } from "./counter.action";

//Initial State
export const initialState =0 ;

//Create a Reducer Function

export const counterReducer = createReducer(
    initialState,

    on(Increment , (State)=> State+1),

    on(Decrement , (State)=>State -1 ),

    on(Reset, ()=> initialState)
)
    