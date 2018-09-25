module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar hyperapp_1 = require(\"hyperapp\");\nrequire(\"./IndexPage.scss\");\nvar PersonPanel_1 = require(\"~/modules/components/PersonPanel\");\nvar person = {\n    id: \"test\",\n    external: false,\n    name: \"John Doe\"\n};\nfunction IndexPage(props) {\n    return (hyperapp_1.h(\"div\", { class: \"container\" },\n        hyperapp_1.h(\"h1\", null, \"Index Page\"),\n        hyperapp_1.h(\"div\", { class: \"columns\" },\n            hyperapp_1.h(\"div\", { class: \"col-1\" }),\n            hyperapp_1.h(\"div\", { class: \"col-5\" },\n                hyperapp_1.h(PersonPanel_1.PersonPanel, { person: person, tab: \"details\" })))));\n}\nexports.IndexPage = IndexPage;\n",
dependencies: ["hyperapp","./IndexPage.scss","~/modules/components/PersonPanel"],
sourceMap: {},
headerContent: undefined,
mtime: 1537898270094,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
