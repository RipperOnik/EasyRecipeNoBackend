"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../globalState/hooks");
var reducerActions_1 = require("../../../globalState/reducerActions");
var api_1 = require("../../../globalState/api");
function ScrollableItem(props) {
    var dispatch = (0, hooks_1.useAppDispatch)();
    return (react_1.default.createElement(react_router_dom_1.Link, { to: "/feed/".concat(props.displayName), onClick: function () {
            return dispatch((0, reducerActions_1.navigateToFeed)({
                useQuery: function () { return api_1.useGetCuisinePostsQuery; },
                header: props.displayName,
                tag: props.tag,
            }));
        } },
        react_1.default.createElement("div", { style: {
                position: "relative",
                display: "inline-block",
                textAlign: "center",
                wordWrap: "break-word",
                padding: "0.5em",
            } },
            react_1.default.createElement("img", { src: props.iconImage, alt: "img", className: "scrollable-item rounded-circle round-img" }),
            react_1.default.createElement("span", { className: "text-image" }, props.displayName))));
}
exports.default = ScrollableItem;
//# sourceMappingURL=ScrollableItem.js.map