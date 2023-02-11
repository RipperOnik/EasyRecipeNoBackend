"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("../../styles/detailedPage.css");
require("../../styles/card.css");
var Rating_1 = require("../subcomponents/Rating");
var hooks_1 = require("../../globalState/hooks");
function DetailedPage() {
    var currentPage = (0, hooks_1.useAppSelector)(function (state) { return state.currentDetailedPage; });
    // window.scrollTo(0, 0)
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "container detailed-head" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement("img", { className: "img-detailed", alt: "img", src: currentPage.urlImage })),
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement("h1", null, currentPage.title),
                    react_1.default.createElement("p", { className: "author" }, currentPage.author),
                    react_1.default.createElement(Rating_1.default, { averageRating: currentPage.averageRating, totalReviewCount: currentPage.totalReviewCount }),
                    react_1.default.createElement("div", { className: "row", style: { marginTop: "20px" } },
                        react_1.default.createElement("div", { className: "col" },
                            react_1.default.createElement("div", { className: "row d-flex justify-content-center small-box small-box-top" }, currentPage.preparationTimeSeconds / 60),
                            react_1.default.createElement("div", { className: "row d-flex justify-content-center small-box" }, "Minutes")),
                        react_1.default.createElement("div", { className: "col middle-box" },
                            react_1.default.createElement("div", { className: "row d-flex justify-content-center small-box small-box-top" }, currentPage.ingridients.length),
                            react_1.default.createElement("div", { className: "row d-flex justify-content-center small-box" }, "Ingridients")),
                        react_1.default.createElement("div", { className: "col" },
                            react_1.default.createElement("div", { className: "row d-flex justify-content-center small-box small-box-top" }, currentPage.calories),
                            react_1.default.createElement("div", { className: "row d-flex justify-content-center small-box" }, "Calories")))))),
        react_1.default.createElement("hr", { className: "recipe-hr" }),
        react_1.default.createElement("div", { className: "container w-75" },
            currentPage.ingridients && (react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "Ingridients"),
                react_1.default.createElement("ol", null, currentPage.ingridients.map(function (el, index) {
                    if (el.length > 0)
                        return react_1.default.createElement("li", { className: "my-li" }, el);
                    else {
                        return undefined;
                    }
                })))),
            currentPage.steps && (react_1.default.createElement("div", { style: { margin: "30px 0" } },
                react_1.default.createElement("h2", null, "Preparation steps"),
                react_1.default.createElement("ol", null, currentPage.steps.map(function (step) {
                    return react_1.default.createElement("li", { className: "my-li" }, step);
                })))))));
}
exports.default = DetailedPage;
//# sourceMappingURL=DetailedPage.js.map