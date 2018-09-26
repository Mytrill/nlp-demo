import { ActionsType } from "hyperapp"
import { State, Actions } from "./api"

export const actions: ActionsType<State, Actions> = {
  get() {
    return function(state: State) {
      return state
    }
  },
  set(payload: Partial<State>) {
    return payload
  }
}
