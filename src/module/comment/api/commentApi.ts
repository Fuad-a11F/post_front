import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../store/api/baseQuery";

export const commentApi = createApi({
  reducerPath: "comment",
  baseQuery: baseQuery,
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comment"],
    }),

    updateComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `comment/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Comment"],
    }),

    deleteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `comment/${postId}/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
    }),

    getComments: builder.query({
      query: (postId) => `comment/${postId}`,
      providesTags: ["Comment"],
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useGetCommentsQuery,
  useDeleteCommentMutation,
} = commentApi;
