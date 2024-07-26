import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalType{
    ticTacToe,
    none,
}

interface ModalState {
  type: ModalType;
  data: any,
}

const initialState: ModalState = {
  type: ModalType.none,
  data: null,
};

const modalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setModalType(state, {payload:{type, data}}: PayloadAction<{type: ModalType, data: any}>){
        state.type = type;
        state.data = data;
    },
    emptyModal(state){
        state.type = ModalType.none;
        state.data = null
    },
    closeModal(state){
        state.type = ModalType.none;
    },
    openModal(state, {payload}:PayloadAction<ModalType>){
        state.type = payload;
    }
  },
});

export const { setModalType, emptyModal, closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
