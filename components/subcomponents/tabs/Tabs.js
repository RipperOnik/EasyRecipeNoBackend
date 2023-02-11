"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Tab_1 = require("./Tab");
function Tabs(_a) {
    var tabs = _a.tabs, path = _a.path;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: "nav justify-content-center", style: { marginBottom: "40px" } }, tabs.map(function (el) {
            return (react_1.default.createElement(Tab_1.default, { key: "".concat(path).concat(el.toLowerCase()), name: el, url: "".concat(path).concat(el.toLowerCase()) }));
        }))));
}
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map