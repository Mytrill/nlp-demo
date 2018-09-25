module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar interceptors_1 = require(\"./interceptors\");\nvar listeners_1 = require(\"./listeners\");\nfunction push(url) {\n    if (window.location.pathname === url) {\n        return;\n    }\n    if (interceptors_1.intercept(url)) {\n        history.pushState(null, undefined, url);\n        listeners_1.notifyListeners();\n    }\n}\nexports.push = push;\nfunction back() {\n    history.back();\n    listeners_1.notifyListeners();\n}\nexports.back = back;\nfunction forward() {\n    history.forward();\n    listeners_1.notifyListeners();\n}\nexports.forward = forward;\nfunction replace(url) {\n    if (window.location.pathname === url) {\n        return;\n    }\n    if (interceptors_1.intercept(url)) {\n        history.replaceState(null, undefined, url);\n        listeners_1.notifyListeners();\n    }\n}\nexports.replace = replace;\n",
dependencies: ["./interceptors","./listeners"],
sourceMap: {},
headerContent: undefined,
mtime: 1536926066884,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
