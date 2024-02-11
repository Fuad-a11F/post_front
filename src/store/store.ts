import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authApi } from "../module/auth/api/authApi";
import auth from "./slice/authSlice";
import post from "./slice/postSlice";
import tooltip from "./slice/tooltipSlice";
import { userApi } from "./api/userApi";
import { commentApi } from "../module/comment/api/commentApi";
import { postApi } from "./api/postApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [postApi.reducerPath]: postApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
  post,
  auth,
  tooltip,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        postApi.middleware,
        authApi.middleware,
        commentApi.middleware,
        userApi.middleware,
      ),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
