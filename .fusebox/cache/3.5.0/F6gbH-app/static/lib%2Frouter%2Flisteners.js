module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar getMatch_1 = require(\"./getMatch\");\nexports.LISTENERS = [];\nfunction addListener(path, listener, exact) {\n    var l = function () {\n        var result = getMatch_1.getMatch(window.location.pathname, path, exact || false);\n        if (result) {\n            listener(result);\n        }\n    };\n    l.__LISTENER = listener;\n    exports.LISTENERS.push(l);\n    l();\n}\nexports.addListener = addListener;\nfunction removeListener(listener) {\n    var index = exports.LISTENERS.findIndex(function (l) { return l.__LISTENER === listener; });\n    if (index >= 0) {\n        exports.LISTENERS.splice(index);\n    }\n}\nexports.removeListener = removeListener;\nfunction notifyListeners() {\n    exports.LISTENERS.forEach(function (u) { return u(); });\n}\nexports.notifyListeners = notifyListeners;\n",
dependencies: ["./getMatch"],
sourceMap: {},
headerContent: undefined,
mtime: 1536581607242,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
