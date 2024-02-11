import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsername: builder.query<string>({
      query: () => `get-me`,
    }),
  }),
});

export const { useGetUsernameQuery } = userApi;
