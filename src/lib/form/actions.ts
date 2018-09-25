import { ActionsType } from "hyperapp"

import { FormFieldUpdate, FormUpdate, State, Actions } from "./api"

const GLOBAL_FIELD = "__GLOBAL"

export const actions: ActionsType<State, Actions> = {
  set: ({ error, fields = {} }: FormUpdate) => state => {
    const updates: State = {}

    Object.keys(fields).forEach(key => {
      updates[key] = { ...state[key], ...fields[key] }
    })

    if (typeof error !== undefined) {
      updates[GLOBAL_FIELD] = { ...state[GLOBAL_FIELD], error }
    }

    return updates
  },
  setField: (payload: FormFieldUpdate) => state => {
    const { field, ...values } = payload
    return { [field]: { ...state[field], ...values } }
  }
}
