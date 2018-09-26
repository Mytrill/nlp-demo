import { ActionsType } from "hyperapp"

import { State, Actions, SetPayload } from "./api"

export const actions: ActionsType<State, Actions> = {
  get() {
    return function(state: State) {
      return state
    }
  },
  set(payload: SetPayload) {
    const { widget, key, value } = payload
    return function(state: State) {
      return {
        [widget]: key ? { ...state[widget], [key]: value } : value
      }
    }
  }
}
