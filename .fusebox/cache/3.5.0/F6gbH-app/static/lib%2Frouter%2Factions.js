module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar listeners_1 = require(\"./listeners\");\nexports.actions = {\n    update: function () { return ({ location: window.location.pathname }); },\n    init: function () { return function (_, actions) {\n        listeners_1.LISTENERS.push(actions.update);\n        listeners_1.notifyListeners();\n    }; }\n};\n",
dependencies: ["./listeners"],
sourceMap: {},
headerContent: undefined,
mtime: 1536581717408,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
