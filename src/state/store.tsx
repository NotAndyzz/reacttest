import { configureStore } from "@reduxjs/toolkit";
import calculator from "./calculator/calculatorSlice";
import counter from "./counter/counterSlice";
import modal from "./modal/modalSlice";

export const store = configureStore({
    reducer:{
        calculator,
        counter,
        modal
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

