import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../store/api";

export const commentApi = createApi({
  reducerPath: "comment",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (body) => ({
        url: `comment`,
        method: "POST",
        body: body,
      }),
    }),

    updateComment: builder.mutation({
      query: (body) => ({
        url: `comment`,
        method: "PUT",
        body: body,
      }),
    }),

    getComments: builder.query({
      query: (postId) => `comment/${postId}`,
    }),

    deleteComment: builder.mutation({
      query: (body) => ({
        url: `comment`,
        method: "DELETE",
        body: body,
      }),
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} = commentApi;
