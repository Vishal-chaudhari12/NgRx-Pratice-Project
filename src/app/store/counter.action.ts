import { CreateEffectOptions } from "@angular/core";
import { createAction } from "@ngrx/store";

//Increment Action
export const Increment = createAction(
    '[Counter] Increment'
)

//decrement Action
export const Decrement = createAction(
    '[Counter] Decrement'
)

//reset Action
export const Reset = createAction(
    '[Counter] reset'
)