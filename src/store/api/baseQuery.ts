import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("idAuthUser");

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});
