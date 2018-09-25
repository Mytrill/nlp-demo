import { State } from "./api"

export function get(state: State, widget: string, key: string): any {
  return (state[widget] || {})[key]
}
