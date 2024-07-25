import { configureStore } from "@reduxjs/toolkit";
import calculator from "./calculator/calculatorSlice";
import counter from "./counter/counterSlice";

export const store = configureStore({
    reducer:{
        calculator,
        counter,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

