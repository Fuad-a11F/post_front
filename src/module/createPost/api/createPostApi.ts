import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../store/api";

export const createPostApi = createApi({
  reducerPath: "createPostApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (patch) => ({
        url: `post`,
        method: "POST",
        body: patch,
      }),
    }),

    deletePost: builder.mutation({
      query: (patch) => ({
        url: `post`,
        method: "DELETE",
        body: patch,
      }),
    }),
  }),
});

export const { useCreatePostMutation, useDeletePostMutation } = createPostApi;
