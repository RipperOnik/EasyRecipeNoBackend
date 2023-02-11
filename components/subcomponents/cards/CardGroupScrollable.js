"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FoodCardScrollable_1 = require("./FoodCardScrollable");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../globalState/hooks");
var reducerActions_1 = require("../../../globalState/reducerActions");
function CardGroupScrollable(props) {
    var dispatch = (0, hooks_1.useAppDispatch)();
    return (react_1.default.createElement("div", { style: { margin: "50px 0" } },
        react_1.default.createElement("h1", null, props.headerText),
        react_1.default.createElement("div", { className: "scrollable container" }, props.cards.map(function (card, index) {
            var _a, _b;
            return (react_1.default.createElement(FoodCardScrollable_1.default, { id: card.id, key: card.id, author: card.author, preparationTimeSeconds: card.preparationTimeSeconds, ingridients: card.ingridients, steps: card.steps, title: card.title, averageRating: (_a = card.averageRating) !== null && _a !== void 0 ? _a : 0, totalReviewCount: (_b = card.totalReviewCount) !== null && _b !== void 0 ? _b : 0, urlImage: card.urlImage, calories: card.calories }));
        })),
        react_1.default.createElement("div", { style: { textAlign: "end" }, className: "container" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/feed/".concat(props.headerText), onClick: function () { return dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return props.useQuery; }, header: props.headerText, tag: props.tag })); } }, "see all"))));
}
exports.default = CardGroupScrollable;
//# sourceMappingURL=CardGroupScrollable.js.map