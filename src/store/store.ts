import { configureStore } from "@reduxjs/toolkit";
import { createPostApi } from "../module/createPost/api/createPostApi";
import { postApi } from "../module/postsWrapper/api/postApi";
import { postDetailApi } from "../module/postDetailInfo/api/postDetailApi";
import { authApi } from "../module/auth/api/authApi";
import auth from "./slice/authSlice";
import post from "./slice/postSlice";
import tooltip from "./slice/tooltipSlice";
import { userApi } from "./api/userApi";
import { commentApi } from "../module/comment/api/commentApi";

export const store = configureStore({
  reducer: {
    [createPostApi.reducerPath]: createPostApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [postDetailApi.reducerPath]: postDetailApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    post,
    auth,
    tooltip,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createPostApi.middleware,
      postApi.middleware,
      postDetailApi.middleware,
      authApi.middleware,
      commentApi.middleware,
      userApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
