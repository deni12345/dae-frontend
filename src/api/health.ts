import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const healthAPI = createApi({
  reducerPath: "health",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getHealth: builder.query<string, void>({
      query: () => "/posts/1",
    }),
  }),
});

export const { useGetHealthQuery } = healthAPI;
