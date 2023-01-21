"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ScrollableItem_1 = require("./ScrollableItem");
var strings_1 = require("../../../resources/strings");
function Scrollable() {
    return (react_1.default.createElement("div", { className: "container-fluid scrollable", style: { marginBottom: '50px' } }, strings_1.Cuisines.map(function (el, index) {
        return react_1.default.createElement(ScrollableItem_1.default, { key: el.tag, displayName: el.displayName, iconImage: el.iconImage, tag: el.tag });
    })));
}
exports.default = Scrollable;
//# sourceMappingURL=Scrollable.js.map