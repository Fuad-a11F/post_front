import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TooltipState = {
  message: string;
  isOpen: boolean;
  isSuccess: boolean;
  isError: boolean;
  isWarning: boolean;
};

const initialState: TooltipState = {
  message: "",
  isOpen: false,
  isSuccess: false,
  isError: false,
  isWarning: false,
};

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    toggleTooltip(state, action: PayloadAction<TooltipState>) {
      state.isWarning = action.payload.isWarning;
      state.isError = action.payload.isError;
      state.isSuccess = action.payload.isSuccess;
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    },
  },
});

export const { toggleTooltip } = tooltipSlice.actions;
export default tooltipSlice.reducer;
