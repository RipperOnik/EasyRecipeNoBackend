"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./subcomponents/navbar/Navbar");
var react_2 = require("react");
var react_router_dom_2 = require("react-router-dom");
var hooks_1 = require("../globalState/hooks");
var reducerActions_1 = require("../globalState/reducerActions");
var strings_1 = require("../resources/strings");
var strings_2 = require("../resources/strings");
var api_1 = require("../globalState/api");
var reducerActions_2 = require("../globalState/reducerActions");
var Layout = function () {
    var pathname = (0, react_router_dom_2.useLocation)().pathname;
    var dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_2.useEffect)(function () {
        // window.scrollTo(0, 0);
        window.scrollTo({
            top: 0,
            left: 0
        });
    }, [pathname]);
    (0, react_2.useEffect)(function () {
        if (pathname.slice(1, 7) === "browse") {
            dispatch((0, reducerActions_1.navigateNavbar)(strings_1.NavbarItemsNames.BROWSE));
        }
        else if (pathname === "/") {
            dispatch((0, reducerActions_1.navigateNavbar)(strings_1.NavbarItemsNames.HOME));
        }
        else if (pathname.slice(1, 7) === "dishes") {
            dispatch((0, reducerActions_1.navigateNavbar)(strings_1.NavbarItemsNames.DISHES));
        }
    });
    (0, react_2.useEffect)(function () {
        if (pathname === "/dishes/brownie") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.brownie.name, tag: strings_2.Dishes.brownie.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.brownie.name));
        }
        else if (pathname === "/dishes/burger") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.burger.name, tag: strings_2.Dishes.burger.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.burger.name));
        }
        else if (pathname === "/dishes/cake") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.cake.name, tag: strings_2.Dishes.cake.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.cake.name));
        }
        else if (pathname === "/dishes/cookie") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.cookie.name, tag: strings_2.Dishes.cookie.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.cookie.name));
        }
        else if (pathname === "/dishes/lasagna") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.lasagna.name, tag: strings_2.Dishes.lasagna.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.lasagna.name));
        }
        else if (pathname === "/dishes/pancake") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.pancake.name, tag: strings_2.Dishes.pancake.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.pancake.name));
        }
        else if (pathname === "/dishes/pie") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.pie.name, tag: strings_2.Dishes.pie.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.pie.name));
        }
        else if (pathname === "/dishes/pizza") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.pizza.name, tag: strings_2.Dishes.pizza.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.pizza.name));
        }
        else if (pathname === "/dishes/sandwich") {
            dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetCertainDishPostsQuery; }, header: strings_2.Dishes.sandwich.name, tag: strings_2.Dishes.sandwich.tag }));
            dispatch((0, reducerActions_2.navigateTab)(strings_2.Dishes.sandwich.name));
        }
        // else if (pathname === "/browse/appetizers") {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetAppetizersPostsQuery, header: TabItemsNames.APPETIZERS, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.APPETIZERS))
        // }
        // else if (pathname === "/browse/desserts") {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetDessertsPostsQuery, header: TabItemsNames.DESSERTS, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.DESSERTS))
        // }
        // else if (pathname === `/browse/${TabItemsNames.KIDFRIENDLY.toLowerCase()}`) {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetKidPostsQuery, header: TabItemsNames.KIDFRIENDLY, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.KIDFRIENDLY))
        // }
        // else if (pathname === `/browse/${TabItemsNames.MAINDISH.toLowerCase()}`) {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetMainDishPostsQuery, header: TabItemsNames.MAINDISH, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.MAINDISH))
        // }
        // else if (pathname === `/browse/${TabItemsNames.QUICKANDEASY.toLowerCase()}`) {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetEasyPostsQuery, header: TabItemsNames.QUICKANDEASY, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.QUICKANDEASY))
        // }
        // else if (pathname === `/browse/${TabItemsNames.SALADS.toLowerCase()}`) {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetSaladsPostsQuery, header: TabItemsNames.SALADS, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.SALADS))
        // }
        // else if (pathname === `/browse/${TabItemsNames.SIDEDISH.toLowerCase()}`) {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetSideDishPostsQuery, header: TabItemsNames.SIDEDISH, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.SIDEDISH))
        // }
        // else if (pathname === `/browse/${TabItemsNames.VEGETARIAN.toLowerCase()}`) {
        //   dispatch(navigateToFeed({useQuery: () => api.useGetVegetarianPostsQuery, header: TabItemsNames.VEGETARIAN, tag: ""}))
        //   dispatch(navigateTab(TabItemsNames.VEGETARIAN))
        // }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navbar_1.default, null),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports.default = Layout;
//# sourceMappingURL=Layout.js.map