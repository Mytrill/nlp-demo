import { ActionsType } from "hyperapp"

import { State, Actions } from "./api"

export const actions: ActionsType<State, Actions> = {
  set(payload: Partial<State>) {
    return payload
  }
}
