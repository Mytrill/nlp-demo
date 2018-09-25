module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ALPHABET = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_\";\nvar SIZE = 12;\nvar rand = function () { return ALPHABET[Math.floor(Math.random() * ALPHABET.length)]; };\n/** Function to generate a GUID. */\nexports.guid = function () {\n    return Array.apply(null, Array(SIZE))\n        .map(rand)\n        .join(\"\");\n};\n/** Transform possible error objets in a message. */\nfunction getErrorMessage(error) {\n    if (typeof error === \"string\") {\n        return error;\n    }\n    return error.message;\n}\nexports.getErrorMessage = getErrorMessage;\nfunction getUrlParameter(name) {\n    var url = new URL(location.href);\n    return url.searchParams.get(name);\n}\nexports.getUrlParameter = getUrlParameter;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1537366616984,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
