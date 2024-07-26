import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import Calculator from "../../components/Calculator";

interface CalculatorState {
  value: number;
}

const initialState: CalculatorState = {
  value: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // }
    save: (state, action:PayloadAction<number>) => {
        state.value = action.payload;
    }
  }
});

export const {save} = calculatorSlice.actions;

export default calculatorSlice.reducer;
