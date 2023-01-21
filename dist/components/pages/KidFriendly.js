"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../globalState/hooks");
var reducerActions_1 = require("../../globalState/reducerActions");
var api_1 = require("../../globalState/api");
var strings_1 = require("../../resources/strings");
var CardGroup_1 = require("../subcomponents/cards/CardGroup");
function KidFriendly() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var dispatch = (0, hooks_1.useAppDispatch)();
    dispatch((0, reducerActions_1.navigateTab)(strings_1.TabItemsNames.KIDFRIENDLY));
    dispatch((0, reducerActions_1.navigateToFeed)({ useQuery: function () { return api_1.useGetKidPostsQuery; }, header: strings_1.TabItemsNames.KIDFRIENDLY, tag: "" }));
    return (react_1.default.createElement(CardGroup_1.default, null));
}
exports.default = KidFriendly;
//# sourceMappingURL=KidFriendly.js.map