import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: !!localStorage.getItem("idAuthUser"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuth(state) {
      state.isAuth = true;
    },

    isNotAuth(state) {
      state.isAuth = false;
    },
  },
});

export const { isNotAuth, isAuth } = authSlice.actions;
export default authSlice.reducer;
