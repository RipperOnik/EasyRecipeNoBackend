"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentNavbarID = exports.currentDetailedPageReducer = exports.currentTabItemReducer = exports.currentNavbarItemReducer = exports.currentFeedReducer = exports.navigateTab = exports.navigateNavbar = exports.navigateToDetailedPage = exports.navigateToFeed = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var strings_1 = require("../resources/strings");
var api_1 = require("./api");
var currentNavbarItem = (0, toolkit_1.createSlice)({
    name: 'currentNavbarItem',
    initialState: { id: strings_1.NavbarItemsNames.HOME },
    reducers: {
        navigateNavbar: function (state, action) {
            state.id = action.payload;
        }
    }
});
var currentTabItem = (0, toolkit_1.createSlice)({
    name: 'currentTabItem',
    initialState: { id: strings_1.TabItemsNames.QUICKANDEASY },
    reducers: {
        navigateTab: function (state, action) {
            state.id = action.payload;
        }
    }
});
var initialState = { id: "", urlImage: "", title: "", author: "", averageRating: 0, totalReviewCount: 0, preparationTimeSeconds: 0, ingridients: [""], steps: [""], calories: 0 };
var currentDetailedPage = (0, toolkit_1.createSlice)({
    name: 'currentDetailedPage',
    initialState: initialState,
    reducers: {
        navigateToDetailedPage: function (state, action) {
            state.id = action.payload.id;
            state.urlImage = action.payload.urlImage;
            state.title = action.payload.title;
            state.author = action.payload.author;
            state.averageRating = action.payload.averageRating;
            state.totalReviewCount = action.payload.totalReviewCount;
            state.preparationTimeSeconds = action.payload.preparationTimeSeconds;
            state.ingridients = action.payload.ingridients;
            state.steps = action.payload.steps;
            state.calories = action.payload.calories;
        }
    }
});
var currentFeed = (0, toolkit_1.createSlice)({
    name: "currentFeed",
    initialState: { useQuery: function () { return api_1.default.useGetPopularPostsQuery; }, header: "", tag: "" },
    reducers: {
        navigateToFeed: function (state, action) {
            state.useQuery = action.payload.useQuery;
            state.header = action.payload.header;
            state.tag = action.payload.tag;
        }
    }
});
exports.navigateToFeed = currentFeed.actions.navigateToFeed;
exports.navigateToDetailedPage = currentDetailedPage.actions.navigateToDetailedPage;
exports.navigateNavbar = currentNavbarItem.actions.navigateNavbar;
exports.navigateTab = currentTabItem.actions.navigateTab;
exports.currentFeedReducer = currentFeed.reducer;
exports.currentNavbarItemReducer = currentNavbarItem.reducer;
exports.currentTabItemReducer = currentTabItem.reducer;
exports.currentDetailedPageReducer = currentDetailedPage.reducer;
var currentNavbarID = function (state) { return state.currentNavbarItem.id; };
exports.currentNavbarID = currentNavbarID;
//# sourceMappingURL=reducerActions.js.map