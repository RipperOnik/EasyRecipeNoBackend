"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetCertainDishPostsQuery = exports.useGetSideDishPostsQuery = exports.useGetVegetarianPostsQuery = exports.useGetSaladsPostsQuery = exports.useGetDessertsPostsQuery = exports.useGetMainDishPostsQuery = exports.useGetAppetizersPostsQuery = exports.useGetKidPostsQuery = exports.useGetEasyPostsQuery = exports.useGetCuisinePostsQuery = exports.useGetTrendingPostsQuery = exports.useGetPopularPostsQuery = exports.apiSlice = void 0;
// Import the RTK Query methods from the React-specific entry point
var react_1 = require("@reduxjs/toolkit/query/react");
// Define our single API slice object
exports.apiSlice = (0, react_1.createApi)({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: "api",
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "https://yummly2.p.rapidapi.com/feeds/list",
        prepareHeaders: function (headers) {
            headers.set("X-RapidAPI-Key", "be35ffd00amshd3b2c480060a62bp1be63ajsn5f63b6eadc0c");
            headers.set("X-RapidAPI-Host", "yummly2.p.rapidapi.com");
            return headers;
        },
    }),
    // The "endpoints" represent operations and requests for this server
    endpoints: function (builder) { return ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getPopularPosts: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: function () { return "?limit=24&start=0&tag=list.recipe.popular"; },
        }),
        getTrendingPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.trending"; },
        }),
        getCuisinePosts: builder.query({
            query: function (cuisineTag) { return "?limit=24&start=0&tag=".concat(cuisineTag); },
        }),
        getEasyPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:search:exp_sqe"; }
        }),
        getKidPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:cuisine\\^cuisine\\-kid\\-friendly"; }
        }),
        getMainDishPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Main\\ Dishes)"; }
        }),
        getDessertsPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Desserts)"; }
        }),
        getAppetizersPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Appetizers)"; }
        }),
        getSaladsPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:(course\\^course\\-Salads)"; }
        }),
        getVegetarianPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:diet_inclusion_s_mv:387\\^Lacto\\-ovo\\ vegetarian"; }
        }),
        getSideDishPosts: builder.query({
            query: function () { return "?limit=24&start=0&tag=list.recipe.search_based:fq:attribute_s_mv:course\\^course\\-Side\\ Dishes"; }
        }),
        getCertainDishPosts: builder.query({
            query: function (dish) { return "?limit=24&start=0&tag=".concat(dish); }
        }),
    }); },
});
// Export the auto-generated hook for the `getPosts` query endpoint
exports.useGetPopularPostsQuery = exports.apiSlice.useGetPopularPostsQuery, exports.useGetTrendingPostsQuery = exports.apiSlice.useGetTrendingPostsQuery, exports.useGetCuisinePostsQuery = exports.apiSlice.useGetCuisinePostsQuery, exports.useGetEasyPostsQuery = exports.apiSlice.useGetEasyPostsQuery, exports.useGetKidPostsQuery = exports.apiSlice.useGetKidPostsQuery, exports.useGetAppetizersPostsQuery = exports.apiSlice.useGetAppetizersPostsQuery, exports.useGetMainDishPostsQuery = exports.apiSlice.useGetMainDishPostsQuery, exports.useGetDessertsPostsQuery = exports.apiSlice.useGetDessertsPostsQuery, exports.useGetSaladsPostsQuery = exports.apiSlice.useGetSaladsPostsQuery, exports.useGetVegetarianPostsQuery = exports.apiSlice.useGetVegetarianPostsQuery, exports.useGetSideDishPostsQuery = exports.apiSlice.useGetSideDishPostsQuery, exports.useGetCertainDishPostsQuery = exports.apiSlice.useGetCertainDishPostsQuery;
exports.default = exports.apiSlice;
//# sourceMappingURL=api.js.map