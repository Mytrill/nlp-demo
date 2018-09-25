module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar listeners_1 = require(\"./listeners\");\nvar INTERCEPTORS = [];\nexports.intercept = function (url) {\n    return INTERCEPTORS.reduce(function (prev, interceptor) { return prev && interceptor(url); }, true);\n};\nwindow.onpopstate = function (e) {\n    var allowed = exports.intercept(window.location.href);\n    if (!allowed) {\n        e.preventDefault();\n        e.stopImmediatePropagation();\n        history.go(1);\n    }\n    else {\n        listeners_1.notifyListeners();\n    }\n};\nfunction addInterceptor(interceptor) {\n    INTERCEPTORS.push(interceptor);\n}\nexports.addInterceptor = addInterceptor;\nfunction removeInterceptor(interceptor) {\n    var index = INTERCEPTORS.findIndex(function (i) { return i === interceptor; });\n    if (index >= 0) {\n        INTERCEPTORS.splice(index);\n    }\n}\nexports.removeInterceptor = removeInterceptor;\n",
dependencies: ["./listeners"],
sourceMap: {},
headerContent: undefined,
mtime: 1536581651919,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
