import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../store/api";

export const postDetailApi = createApi({
  reducerPath: "postDetailApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `post/${id}`,
    }),
  }),
});

export const { useGetPostByIdQuery } = postDetailApi;
