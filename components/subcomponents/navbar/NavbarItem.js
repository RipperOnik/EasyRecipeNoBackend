"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../../globalState/hooks");
var reducerActions_1 = require("../../../globalState/reducerActions");
var react_router_dom_1 = require("react-router-dom");
function NavbarItem(props) {
    var currentActiveID = (0, hooks_1.useAppSelector)(reducerActions_1.currentNavbarID);
    var dispatch = (0, hooks_1.useAppDispatch)();
    if (currentActiveID === props.id) {
        return (react_1.default.createElement("li", { className: "nav-item", onClick: function () {
                // dispatch(navigateNavbar(props.name))
                // dispatch(navigateTab(TabItemsNames.QUICKANDEASY))
            } },
            react_1.default.createElement(react_router_dom_1.Link, { to: props.url, className: "nav-link active", "aria-current": "page" },
                " ",
                props.name)));
    }
    else {
        return (react_1.default.createElement("li", { className: "nav-item", onClick: function () {
                // dispatch(navigateNavbar(props.name))
                // dispatch(navigateTab(TabItemsNames.QUICKANDEASY))
            } },
            react_1.default.createElement(react_router_dom_1.Link, { to: props.url, className: "nav-link" },
                " ",
                props.name)));
    }
}
exports.default = NavbarItem;
//# sourceMappingURL=NavbarItem.js.map