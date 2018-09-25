module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nvar state_1 = require(\"./state\");\nvar actions_1 = require(\"./actions\");\nvar view_1 = require(\"./view\");\nhyperapp_1.app(state_1.state, actions_1.actions, view_1.view, document.getElementById(\"app\")).router.init();\n",
dependencies: ["hyperapp","./state","./actions","./view"],
sourceMap: {},
headerContent: undefined,
mtime: 1537368857251,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
