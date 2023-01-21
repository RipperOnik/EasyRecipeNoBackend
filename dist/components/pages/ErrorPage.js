"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
function ErrorPage() {
    var error = (0, react_router_dom_1.useRouteError)();
    console.error(error);
    return (react_1.default.createElement("div", { id: "error-page" },
        react_1.default.createElement("h1", null, "Oops!"),
        react_1.default.createElement("p", null, "Sorry, an unexpected error has occurred.")));
}
exports.default = ErrorPage;
//# sourceMappingURL=ErrorPage.js.map