module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nvar navigation_1 = require(\"./navigation\");\nfunction Link(props, children) {\n    props.onclick = function (e) {\n        if (e.button !== 0 ||\n            e.altKey ||\n            e.metaKey ||\n            e.ctrlKey ||\n            e.shiftKey ||\n            props.target === \"_blank\" ||\n            e.currentTarget.origin !== location.origin) {\n        }\n        else {\n            e.preventDefault();\n            navigation_1.push(props.href);\n        }\n    };\n    return hyperapp_1.h(\"a\", props, children);\n}\nexports.Link = Link;\n",
dependencies: ["hyperapp","./navigation"],
sourceMap: {},
headerContent: undefined,
mtime: 1537086679597,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
