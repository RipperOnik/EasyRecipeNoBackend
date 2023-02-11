"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("../styles/styles.css");
var CardGroup_1 = require("./subcomponents/cards/CardGroup");
var Home_1 = require("./pages/Home");
var Layout_1 = require("./Layout");
var react_router_dom_1 = require("react-router-dom");
var ErrorPage_1 = require("./pages/ErrorPage");
var Tabs_1 = require("./subcomponents/tabs/Tabs");
var DetailedPage_1 = require("./pages/DetailedPage");
var KidFriendly_1 = require("./pages/KidFriendly");
var QuickAndEasy_1 = require("./pages/QuickAndEasy");
var MainDish_1 = require("./pages/MainDish");
var Desserts_1 = require("./pages/Desserts");
var Appetizers_1 = require("./pages/Appetizers");
var Salads_1 = require("./pages/Salads");
var Vegetarian_1 = require("./pages/Vegetarian");
var SideDish_1 = require("./pages/SideDish");
var strings_1 = require("../resources/strings");
var strings_2 = require("../resources/strings");
function App() {
    var tabsBrowse = [];
    tabsBrowse.push(strings_1.TabItemsNames.APPETIZERS);
    tabsBrowse.push(strings_1.TabItemsNames.DESSERTS);
    tabsBrowse.push(strings_1.TabItemsNames.KIDFRIENDLY);
    tabsBrowse.push(strings_1.TabItemsNames.MAINDISH);
    tabsBrowse.push(strings_1.TabItemsNames.QUICKANDEASY);
    tabsBrowse.push(strings_1.TabItemsNames.SALADS);
    tabsBrowse.push(strings_1.TabItemsNames.SIDEDISH);
    tabsBrowse.push(strings_1.TabItemsNames.VEGETARIAN);
    var tabsDishes = [];
    tabsDishes.push(strings_2.Dishes.brownie.name);
    tabsDishes.push(strings_2.Dishes.burger.name);
    tabsDishes.push(strings_2.Dishes.cake.name);
    tabsDishes.push(strings_2.Dishes.cookie.name);
    tabsDishes.push(strings_2.Dishes.lasagna.name);
    tabsDishes.push(strings_2.Dishes.pancake.name);
    tabsDishes.push(strings_2.Dishes.pie.name);
    tabsDishes.push(strings_2.Dishes.pizza.name);
    tabsDishes.push(strings_2.Dishes.sandwich.name);
    var router = (0, react_router_dom_1.createHashRouter)([
        {
            path: "/",
            element: react_1.default.createElement(Layout_1.default, null),
            errorElement: react_1.default.createElement(ErrorPage_1.default, null),
            children: [
                {
                    path: "/",
                    element: react_1.default.createElement(Home_1.default, null),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.QUICKANDEASY.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(QuickAndEasy_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.KIDFRIENDLY.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(KidFriendly_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.MAINDISH.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(MainDish_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.SIDEDISH.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        react_1.default.createElement(SideDish_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.DESSERTS.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(Desserts_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.APPETIZERS.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(Appetizers_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.SALADS.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(Salads_1.default, null))),
                },
                {
                    path: "/browse/".concat(strings_1.TabItemsNames.VEGETARIAN.toLowerCase()),
                    element: (react_1.default.createElement("div", null,
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsBrowse, path: "/browse/" }),
                        " ",
                        react_1.default.createElement(Vegetarian_1.default, null))),
                },
                {
                    path: "/recipe/:id",
                    element: react_1.default.createElement(DetailedPage_1.default, null),
                },
                {
                    path: "/feed/:type",
                    element: react_1.default.createElement(CardGroup_1.default, null),
                },
                {
                    path: "/dishes/:dish",
                    element: (react_1.default.createElement("div", null,
                        " ",
                        react_1.default.createElement(Tabs_1.default, { tabs: tabsDishes, path: "/dishes/" }),
                        " ",
                        react_1.default.createElement(CardGroup_1.default, null),
                        " ")),
                },
            ],
        },
    ], { basename: "/" });
    return react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router });
}
exports.default = App;
//# sourceMappingURL=App.js.map