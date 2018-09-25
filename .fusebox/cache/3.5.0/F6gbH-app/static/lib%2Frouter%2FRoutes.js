module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar tslib_1 = require(\"tslib\");\nvar getMatch_1 = require(\"./getMatch\");\nfunction Routes(props) {\n    var routes = props.routes, _a = props.routeProps, routeProps = _a === void 0 ? {} : _a;\n    return routes.reduce(function (prev, next) {\n        if (prev) {\n            return prev;\n        }\n        var match = getMatch_1.getMatch(location.pathname, next.path, next.exact || false);\n        return match ? next.view(tslib_1.__assign({}, routeProps, { match: match })) : null;\n    }, null);\n}\nexports.Routes = Routes;\n",
dependencies: ["tslib","./getMatch"],
sourceMap: {},
headerContent: undefined,
mtime: 1536581462454,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
