module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nrequire(\"./AboutPage.scss\");\nfunction AboutPage(props) {\n    return (hyperapp_1.h(\"div\", null,\n        hyperapp_1.h(\"h1\", null, \"About Page\"),\n        hyperapp_1.h(\"pre\", null, JSON.stringify(props.state, null, 2))));\n}\nexports.AboutPage = AboutPage;\n",
dependencies: ["hyperapp","./AboutPage.scss"],
sourceMap: {},
headerContent: undefined,
mtime: 1537368751255,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
