"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FoodCard_1 = require("./FoodCard");
var hooks_1 = require("../../../globalState/hooks");
var LoadingSpinner_1 = require("../specialCases/LoadingSpinner");
function CardGroup() {
    var useQuery = (0, hooks_1.useAppSelector)(function (state) { return state.currentFeed.useQuery; })();
    var header = (0, hooks_1.useAppSelector)(function (state) { return state.currentFeed.header; });
    var tag = (0, hooks_1.useAppSelector)(function (state) { return state.currentFeed.tag; });
    var feedPosts;
    var feedCards = [];
    var response = useQuery(tag.length > 0 ? tag : 0);
    if (response.isSuccess) {
        feedPosts = response.data.feed;
        var ingridientsTemp = [];
        for (var i = 0; i < feedPosts.length; i++) {
            var element = feedPosts[i];
            ingridientsTemp = [];
            for (var i_1 = 0; i_1 < element.content.ingredientLines.length; i_1++) {
                ingridientsTemp.push(element.content.ingredientLines[i_1].wholeLine);
            }
            if (element.content.nutrition.nutritionEstimates.length > 0) {
                feedCards.push({
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
    if (!response.isFetching && !response.isLoading) {
        return (react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row d-flex justify-content-center", style: { textAlign: "center" } },
                react_1.default.createElement("h1", null, header),
                feedCards.map(function (card) {
                    var _a, _b;
                    return (react_1.default.createElement(FoodCard_1.default, { id: card.id, key: card.id, author: card.author, preparationTimeSeconds: card.preparationTimeSeconds, ingridients: card.ingridients, steps: card.steps, title: card.title, averageRating: (_a = card.averageRating) !== null && _a !== void 0 ? _a : 0, totalReviewCount: (_b = card.totalReviewCount) !== null && _b !== void 0 ? _b : 0, urlImage: card.urlImage, calories: card.calories }));
                }))));
    }
    else {
        return (react_1.default.createElement("div", { className: "d-flex justify-content-center" },
            react_1.default.createElement(LoadingSpinner_1.default, null)));
    }
}
exports.default = CardGroup;
//# sourceMappingURL=CardGroup.js.map