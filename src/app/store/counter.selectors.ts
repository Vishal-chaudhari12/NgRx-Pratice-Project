import { createSelector } from "@ngrx/store";


export const selectCounterState = (state :any) => state.counter;

export const selectCounter = createSelector(
    selectCounterState,
    counter=> counter

)