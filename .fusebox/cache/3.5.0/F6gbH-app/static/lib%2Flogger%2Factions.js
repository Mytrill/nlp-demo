module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar utils_1 = require(\"~/lib/utils\");\nfunction isLogEntry(entry) {\n    var s = entry.severity;\n    return (s === \"loading\" ||\n        s === \"success\" ||\n        s === \"info\" ||\n        s === \"warning\" ||\n        s === \"error\");\n}\nfunction isPromise(value) {\n    return (value &&\n        typeof value[\"then\"] === \"function\" &&\n        typeof value[\"catch\"] === \"function\");\n}\nfunction getEvent(payload) {\n    if (isPromise(payload)) {\n        return {\n            promise: payload,\n            success: \"Action successful\",\n            error: function (e) { return \"Error: \" + utils_1.getErrorMessage(e); }\n        };\n    }\n    return payload;\n}\nexports.actions = {\n    _log: function (entry) { return function (state, actions) {\n        // clear success entries after a while\n        if (entry && entry.severity === \"success\") {\n            setTimeout(function () {\n                actions.clearCurrent(entry);\n            }, 3000);\n        }\n        return {\n            current: entry,\n            entries: state.entries.concat(entry)\n        };\n    }; },\n    log: function (payload) { return function (_, actions) {\n        if (!payload) {\n            return;\n        }\n        if (typeof payload === \"function\") {\n            payload = payload();\n        }\n        if (isLogEntry(payload)) {\n            actions._log(payload);\n            return;\n        }\n        var event = getEvent(payload);\n        actions._log({ severity: \"loading\", message: event.loading });\n        return event.promise\n            .then(function (res) {\n            var message = typeof event.success === \"function\"\n                ? event.success(res)\n                : event.success;\n            actions._log({ severity: \"success\", message: message });\n            return res;\n        })\n            .catch(function (e) {\n            var message = typeof event.error === \"function\" ? event.error(e) : event.error;\n            actions._log({ severity: \"error\", message: message });\n            throw e;\n        });\n    }; },\n    clearCurrent: function (entry) { return function (state) {\n        if (entry && entry !== state.current) {\n            return;\n        }\n        return { current: null };\n    }; }\n};\n",
dependencies: ["~/lib/utils"],
sourceMap: {},
headerContent: undefined,
mtime: 1537366586213,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}