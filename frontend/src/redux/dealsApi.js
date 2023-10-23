import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dealsApi = createApi({
  reducerPath: "deals",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7373",
  }),

  endpoints: (builder) => ({
    getDeals: builder.query({
      query: token => ({
        url: "/deals",
        headers: {
          Authorization: token,
        },
      }),
    }),
  }),
});

export const { useGetDealsQuery } = dealsApi;
