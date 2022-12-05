// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yummly2.p.rapidapi.com/feeds/list",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "be35ffd00amshd3b2c480060a62bp1be63ajsn5f63b6eadc0c"
      );
      headers.set("X-RapidAPI-Host", "yummly2.p.rapidapi.com");
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPopularPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "?limit=24&start=0&tag=list.recipe.popular",
    }),
    getTrendingPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.trending",
    }),
    getCuisinePosts: builder.query({
      query: (cuisineTag) => `?limit=24&start=0&tag=${cuisineTag}`,
    }),
    getEasyPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:search:exp_sqe"
    }),
    getKidPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:cuisine\\^cuisine\\-kid\\-friendly"
    }),
    getMainDishPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Main\\ Dishes)"
    }),
    getDessertsPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Desserts)"
    }),
    getAppetizersPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Appetizers)"
    }),
    getSaladsPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Salads)"
    }),
    getVegetarianPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:diet_inclusion_s_mv:387\\^Lacto\\-ovo\\ vegetarian"
    }),
    getSideDishPosts: builder.query({
      query: () => "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:course\\^course\\-Side\\ Dishes"
    }),
    getCertainDishPosts: builder.query({
      query: (dish) => `?limit=24&start=0&tag=${dish}`
    }),


  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetPopularPostsQuery,
  useGetTrendingPostsQuery,
  useGetCuisinePostsQuery,
  useGetEasyPostsQuery,
  useGetKidPostsQuery,
  useGetAppetizersPostsQuery,
  useGetMainDishPostsQuery,
  useGetDessertsPostsQuery,
  useGetSaladsPostsQuery,
  useGetVegetarianPostsQuery,
  useGetSideDishPostsQuery,
  useGetCertainDishPostsQuery
} = apiSlice;
export default apiSlice;
