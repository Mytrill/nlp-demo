module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction clearSlashes(path) {\n    return path.substring(path.startsWith(\"/\") ? 1 : 0, path.length - (path.endsWith(\"/\") ? 1 : 0));\n}\nfunction getMatch(location, path, exact) {\n    var params = {};\n    if (location === path) {\n        return { location: location, path: path, params: params };\n    }\n    if (path === \"*\") {\n        return { location: location, path: path, params: params };\n    }\n    var locations = clearSlashes(location).split(\"/\");\n    var paths = clearSlashes(path).split(\"/\");\n    if (paths.length > locations.length ||\n        (exact && paths.length < locations.length)) {\n        return null;\n    }\n    for (var i = 0; i < paths.length; i++) {\n        var segment = paths[i];\n        var loc = locations[i];\n        if (segment.startsWith(\":\")) {\n            params[segment.substring(1)] = loc;\n        }\n        else if (segment !== \"*\" && segment !== loc) {\n            return null;\n        }\n    }\n    return { location: location, path: path, params: params };\n}\nexports.getMatch = getMatch;\n",
dependencies: [],
sourceMap: {},
headerContent: undefined,
mtime: 1537367099440,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
