"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Collapsable_1 = require("./Collapsable");
var NavbarToggler_1 = require("./NavbarToggler");
function Navbar() {
    return (react_1.default.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
        react_1.default.createElement("div", { className: "container-fluid" },
            react_1.default.createElement("a", { className: "navbar-brand", href: "#" },
                react_1.default.createElement("img", { src: "https://cdn-icons-png.flaticon.com/512/1830/1830839.png", alt: "img", width: "30", height: "24" }),
                "EasyRecipe"),
            react_1.default.createElement(NavbarToggler_1.default, null),
            react_1.default.createElement(Collapsable_1.default, null))));
}
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map