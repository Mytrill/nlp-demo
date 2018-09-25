module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nvar components_1 = require(\"~/components\");\nrequire(\"./view.scss\");\nfunction view(state, actions) {\n    return (hyperapp_1.h(\"div\", null,\n        hyperapp_1.h(components_1.Header, { state: state, actions: actions }),\n        hyperapp_1.h(components_1.Body, { state: state, actions: actions }),\n        hyperapp_1.h(components_1.Footer, { state: state, actions: actions })));\n}\nexports.view = view;\n",
dependencies: ["hyperapp","~/components","./view.scss"],
sourceMap: {},
headerContent: undefined,
mtime: 1537366280432,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
