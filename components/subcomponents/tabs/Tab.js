"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var hooks_1 = require("../../../globalState/hooks");
require("../../../styles/tabs.css");
function Tab(props) {
    var currentTabID = (0, hooks_1.useAppSelector)(function (state) { return state.currentTabItem.id; });
    var dispatch = (0, hooks_1.useAppDispatch)();
    if (currentTabID === props.name) {
        return (react_1.default.createElement("li", { className: "nav-item" },
            react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link active custom-tab active-custom", "aria-current": "page", to: props.url }, props.name)));
    }
    else {
        return (react_1.default.createElement("li", { className: "nav-item" },
            react_1.default.createElement(react_router_dom_1.Link, { className: "nav-link custom-tab", to: props.url }, props.name)));
    }
}
exports.default = Tab;
//# sourceMappingURL=Tab.js.map