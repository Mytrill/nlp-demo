module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nvar components_1 = require(\"~/lib/logger/components\");\nvar router_1 = require(\"~/lib/router\");\nrequire(\"./Header.scss\");\nfunction Header(props) {\n    var state = props.state, actions = props.actions;\n    return (hyperapp_1.h(\"header\", { class: \"header navbar\" },\n        hyperapp_1.h(\"section\", { class: \"navbar-section\" },\n            hyperapp_1.h(router_1.Link, { href: \"/\", class: \"navbar-brand mx-2\" }, \"NLP Demo\")),\n        hyperapp_1.h(\"section\", { class: \"navbar-section\" },\n            hyperapp_1.h(components_1.Status, { state: state.logger, actions: actions.logger })),\n        hyperapp_1.h(\"section\", null,\n            hyperapp_1.h(router_1.Link, { href: \"/about\" }, \"About Us\"))));\n}\nexports.Header = Header;\n",
dependencies: ["hyperapp","~/lib/logger/components","~/lib/router","./Header.scss"],
sourceMap: {},
headerContent: undefined,
mtime: 1537908064497,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
