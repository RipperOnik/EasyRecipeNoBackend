"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Scrollable_1 = require("../subcomponents/scrollable/Scrollable");
var CardGroupScrollable_1 = require("../subcomponents/cards/CardGroupScrollable");
var api_1 = require("../../globalState/api");
var LoadingSpinner_1 = require("../subcomponents/specialCases/LoadingSpinner");
function Home() {
    var popularPosts;
    var trendingPosts;
    var popularCards = [];
    var trendingCards = [];
    var responsePopular = (0, api_1.useGetPopularPostsQuery)(0);
    var responseTrending = (0, api_1.useGetTrendingPostsQuery)(0);
    if (responsePopular.isSuccess) {
        popularPosts = responsePopular.data.feed;
        var ingridientsTemp = [];
        for (var i = 0; i < popularPosts.length / 2; i++) {
            var element = popularPosts[i];
            ingridientsTemp = [];
            for (var i_1 = 0; i_1 < element.content.ingredientLines.length; i_1++) {
                ingridientsTemp.push(element.content.ingredientLines[i_1].wholeLine);
            }
            if (element.content.nutrition.nutritionEstimates.length > 0) {
                popularCards.push({
                    id: element.content.details.id,
                    title: element.display.displayName,
                    averageRating: element.content.reviews.averageRating,
                    totalReviewCount: element.content.reviews.totalReviewCount,
                    urlImage: element.display.images[0],
                    author: element.display.profiles[0].displayName,
                    preparationTimeSeconds: element.content.details.totalTimeInSeconds,
                    ingridients: ingridientsTemp,
                    steps: element.content.preparationSteps,
                    calories: element.content.nutrition.nutritionEstimates[0].value,
                });
            }
        }
    }
    if (responseTrending.isSuccess) {
        trendingPosts = responseTrending.data.feed;
        var ingridientsTemp = [];
        for (var i = 0; i < trendingPosts.length / 2; i++) {
            var element = trendingPosts[i];
            ingridientsTemp = [];
            for (var i_2 = 0; i_2 < element.content.ingredientLines.length; i_2++) {
                ingridientsTemp.push(element.content.ingredientLines[i_2].wholeLine);
            }
            if (element.content.nutrition.nutritionEstimates.length > 0) {
                trendingCards.push({
                    id: element.content.details.id,
                    title: element.display.displayName,
                    averageRating: element.content.reviews.averageRating,
                    totalReviewCount: element.content.reviews.totalReviewCount,
                    urlImage: element.display.images[0],
                    author: element.display.profiles[0].displayName,
                    preparationTimeSeconds: element.content.details.totalTimeInSeconds,
                    ingridients: ingridientsTemp,
                    steps: element.content.preparationSteps,
                    calories: element.content.nutrition.nutritionEstimates[0].value,
                });
            }
        }
    }
    return (react_1.default.createElement("div", { className: "my-feed-main" },
        react_1.default.createElement("h1", null, "Choose your favorite cuisine"),
        react_1.default.createElement(Scrollable_1.default, null),
        responsePopular.isSuccess && responseTrending.isSuccess ? (react_1.default.createElement("div", null,
            react_1.default.createElement(CardGroupScrollable_1.default, { headerText: "Popular", cards: popularCards, useQuery: api_1.useGetPopularPostsQuery, tag: "" }),
            react_1.default.createElement(CardGroupScrollable_1.default, { headerText: "Trending", cards: trendingCards, useQuery: api_1.useGetTrendingPostsQuery, tag: "" }))) : (react_1.default.createElement(LoadingSpinner_1.default, null)),
        responsePopular.isError && react_1.default.createElement("p", null, responsePopular.error.toString())));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map