module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nrequire(\"./Body.scss\");\nvar router_1 = require(\"~/lib/router\");\nvar IndexPage_1 = require(\"./pages/IndexPage\");\nvar AboutPage_1 = require(\"./pages/AboutPage\");\nfunction Body(props) {\n    return (hyperapp_1.h(\"div\", null, router_1.Routes({\n        routes: [\n            { path: \"/\", view: IndexPage_1.IndexPage, exact: true },\n            { path: \"/about\", view: AboutPage_1.AboutPage, exact: true },\n            { path: \"*\", view: function () { return router_1.replace(\"/\") && \"\"; } }\n        ],\n        routeProps: props\n    })));\n}\nexports.Body = Body;\n",
dependencies: ["hyperapp","./Body.scss","~/lib/router","./pages/IndexPage","./pages/AboutPage"],
sourceMap: {},
headerContent: undefined,
mtime: 1537875369147,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
