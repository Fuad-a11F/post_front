import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "./baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUsername: builder.query<string>({
      query: () => `get-me`,
    }),
  }),
});

export const { useGetUsernameQuery } = userApi;
