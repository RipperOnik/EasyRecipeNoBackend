"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("../../styles/card.css");
function Rating(_a) {
    var averageRating = _a.averageRating, totalReviewCount = _a.totalReviewCount;
    var counter = [];
    for (var i = 0; i < Math.round(averageRating !== null && averageRating !== void 0 ? averageRating : 0); i++) {
        counter.push(true);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { className: "product-rating", style: { fontSize: "2rem" } }, averageRating ? Math.round(averageRating * 10) / 10 : 0),
        react_1.default.createElement("span", null, "/5"),
        react_1.default.createElement("div", { className: "stars" }, counter.map(function () {
            return react_1.default.createElement("i", { className: "fa fa-star" });
        })),
        react_1.default.createElement("div", { className: "rating-text" },
            react_1.default.createElement("span", null,
                totalReviewCount ? totalReviewCount : 0,
                " reviews"))));
}
exports.default = Rating;
//# sourceMappingURL=Rating.js.map