import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./index";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsername: builder.query({
      query: () => `get-me`,
    }),
  }),
});

export const { useGetUsernameQuery } = userApi;
