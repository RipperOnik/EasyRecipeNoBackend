"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var reducerActions_1 = require("./reducerActions");
var api_1 = require("./api");
exports.store = (0, toolkit_1.configureStore)({
    reducer: (_a = {
            currentNavbarItem: reducerActions_1.currentNavbarItemReducer,
            currentTabItem: reducerActions_1.currentTabItemReducer
        },
        _a[api_1.apiSlice.reducerPath] = api_1.apiSlice.reducer,
        _a.currentDetailedPage = reducerActions_1.currentDetailedPageReducer,
        _a.currentFeed = reducerActions_1.currentFeedReducer,
        _a),
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware().concat(api_1.apiSlice.middleware);
    }
});
//# sourceMappingURL=store.js.map