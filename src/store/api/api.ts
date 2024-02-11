import { baseQuery } from "./baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("idAuthUser");

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
  endpoints: (builder) => ({}),
});
