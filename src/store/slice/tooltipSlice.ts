import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isOpen: false,
  isSuccess: false,
  isError: false,
};

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    toggleTooltip(state, action) {
      state.isError = action.payload.isError;
      state.isSuccess = action.payload.isSuccess;
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    },
  },
});

export const { toggleTooltip } = tooltipSlice.actions;
export default tooltipSlice.reducer;
