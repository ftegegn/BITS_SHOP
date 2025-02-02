import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5656/api',
    // baseUrl: 'https://bits-market-place.onrender.com/api',
    credentials: 'include'
});

export const apiSlice = createApi({
    reducerPath: 'api',
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 5,
    tagTypes: ['userInfo', 'product', 'bid'],
    baseQuery,
    endpoints: () => ({})
});
