"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("react");
function Search() {
    var _a = (0, react_2.useState)(""), text = _a[0], setText = _a[1];
    function changeHandler(event) {
        setText(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
    }
    return (react_1.default.createElement("form", { className: "d-flex", onSubmit: function (e) { return submitHandler(e); } },
        react_1.default.createElement("input", { className: "form-control me-2", type: "search", placeholder: "Search", "aria-label": "Search", onChange: changeHandler, value: text }),
        react_1.default.createElement("button", { className: "btn btn-outline-success", type: "submit" }, "Search")));
}
exports.default = Search;
//# sourceMappingURL=Search.js.map