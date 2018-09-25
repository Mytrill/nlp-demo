module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nfunction StatusChip(_a) {\n    var type = _a.type, message = _a.message, onClose = _a.onClose;\n    return (hyperapp_1.h(\"span\", { class: \"centered text-light\" },\n        hyperapp_1.h(\"span\", { class: \"text-bold text-\" + type }, message),\n        hyperapp_1.h(\"a\", { href: \"#\", class: \"btn btn-clear text-light\", \"aria-label\": \"Close\", role: \"button\", onclick: onClose, style: { \"margin-bottom\": \"4px\" } })));\n}\nvar types = {\n    warning: \"warning\",\n    error: \"error\",\n    success: \"light\",\n    info: \"light\"\n};\nfunction Status(props) {\n    var state = props.state, actions = props.actions;\n    if (state.current) {\n        var entry = state.current;\n        switch (entry.severity) {\n            case \"loading\":\n                return (hyperapp_1.h(\"span\", { class: \"centered\" },\n                    entry.message || \"\",\n                    hyperapp_1.h(\"i\", { class: \"mx-1 my-2 loading\" })));\n            default:\n                return StatusChip({\n                    message: entry.message,\n                    type: types[entry.severity],\n                    onClose: function (e) {\n                        e.preventDefault();\n                        actions.clearCurrent();\n                    }\n                });\n        }\n    }\n    return null;\n}\nexports.Status = Status;\n",
dependencies: ["hyperapp"],
sourceMap: {},
headerContent: undefined,
mtime: 1536598122371,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
