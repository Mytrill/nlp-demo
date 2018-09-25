import { h } from "hyperapp"
import { push } from "./navigation"

export function Link(props, children) {
  props.onclick = function(e) {
    if (
      e.button !== 0 ||
      e.altKey ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      props.target === "_blank" ||
      e.currentTarget.origin !== location.origin
    ) {
    } else {
      e.preventDefault()
      push(props.href)
    }
  }

  return h("a", props, children)
}
