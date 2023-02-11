"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("../../../styles/card.css");
var Rating_1 = require("../Rating");
var reducerActions_1 = require("../../../globalState/reducerActions");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../globalState/hooks");
function FoodCard(props) {
    var _a, _b;
    var dispatch = (0, hooks_1.useAppDispatch)();
    return (react_1.default.createElement("div", { className: "col-lg-4 col-md-12 col-sm-12", style: {
            marginLeft: "20px",
            marginRight: "20px",
        } },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/recipe/".concat(props.id), onClick: function () {
                return dispatch((0, reducerActions_1.navigateToDetailedPage)({
                    id: props.id,
                    urlImage: props.urlImage,
                    title: props.title,
                    author: props.author,
                    averageRating: props.averageRating,
                    totalReviewCount: props.totalReviewCount,
                    preparationTimeSeconds: props.preparationTimeSeconds,
                    ingridients: props.ingridients,
                    steps: props.steps,
                    calories: props.calories,
                }));
            } },
            react_1.default.createElement("div", { className: "card custom-card", style: {
                    width: "18rem",
                    margin: "1.5rem 0.6rem",
                    padding: "0",
                    display: "inline-block",
                    overflow: "hidden",
                } },
                react_1.default.createElement("img", { src: props.urlImage, className: "card-img-top", alt: "img", style: { height: "250px" } }),
                react_1.default.createElement("div", { className: "card-body", style: { whiteSpace: "normal" } },
                    react_1.default.createElement("h5", { className: "card-title", style: { height: "3rem", fontSize: "1rem" } }, props.title),
                    react_1.default.createElement(Rating_1.default, { averageRating: (_a = props.averageRating) !== null && _a !== void 0 ? _a : 0, totalReviewCount: (_b = props.totalReviewCount) !== null && _b !== void 0 ? _b : 0 }))))));
}
exports.default = FoodCard;
//# sourceMappingURL=FoodCard.js.map