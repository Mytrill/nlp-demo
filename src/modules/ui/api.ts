import { StringMap } from "lib/api"

/** widget -> key -> value */
export interface State extends StringMap<StringMap<any>> {}

export interface SetPayload {
  widget: string
  key?: string
  value: string
}

export interface Actions {
  get(): State
  set(payload: SetPayload)
}
