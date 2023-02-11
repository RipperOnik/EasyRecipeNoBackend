"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NavbarItem_1 = require("./NavbarItem");
var strings_1 = require("../../../resources/strings");
function NavbarItems() {
    return (react_1.default.createElement("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0" },
        react_1.default.createElement(NavbarItem_1.default, { id: strings_1.NavbarItemsNames.HOME, name: strings_1.NavbarItemsNames.HOME, url: "/" }),
        react_1.default.createElement(NavbarItem_1.default, { id: strings_1.NavbarItemsNames.BROWSE, name: strings_1.NavbarItemsNames.BROWSE, url: "/browse/".concat(strings_1.TabItemsNames.APPETIZERS.toLowerCase()) }),
        react_1.default.createElement(NavbarItem_1.default, { id: strings_1.NavbarItemsNames.DISHES, name: strings_1.NavbarItemsNames.DISHES, url: "dishes/".concat(strings_1.Dishes.brownie.name.toLowerCase()) })));
}
exports.default = NavbarItems;
//# sourceMappingURL=NavbarItems.js.map