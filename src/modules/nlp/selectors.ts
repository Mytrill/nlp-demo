import { Status } from "lib/nlp/api"

import { State } from "./api"

export function getNlpStatus(state: State): Status {
  if (!state.entry) {
    return "waiting"
  }
  return state.entry.severity
}
