// this is needed as fuse + typescript cannot handle import cc from "classcat"
// this is a copy-paste of the classcat code, see https://github.com/jorgebucaran/classcat

const isArray = Array.isArray

export function cc(names) {
  let i,
    len,
    tmp,
    out = "",
    type = typeof names

  if (type === "string" || type === "number") return names || ""

  if (isArray(names) && names.length > 0) {
    for (i = 0, len = names.length; i < len; i++) {
      if ((tmp = cc(names[i])) !== "") out += (out && " ") + tmp
    }
  } else {
    for (i in names) {
      if (names.hasOwnProperty(i) && names[i]) out += (out && " ") + i
    }
  }

  return out
}
