import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../store/api";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
