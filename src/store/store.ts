import { combineReducers, configureStore } from "@reduxjs/toolkit";

import auth from "./slice/authSlice";
import post from "./slice/postSlice";
import tooltip from "./slice/tooltipSlice";
import { api } from "./api/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  post,
  auth,
  tooltip,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
