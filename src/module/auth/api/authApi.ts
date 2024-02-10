import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../store/api";

type Login = {
  login: string;
  password: string;
};

type Registration = {
  login: string;
  email: string;
  password: string;
};

type Response = {
  id?: string;
  message?: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<Response, Login>({
      query: (body) => ({
        url: `login`,
        method: "POST",
        body: body,
      }),
    }),

    registration: builder.mutation<Response, Registration>({
      query: (body) => ({
        url: `registration`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
