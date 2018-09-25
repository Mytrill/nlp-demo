import { FormFieldOption, State } from "./api"

export interface InitialFields {
  [name: string]: boolean | string | FormFieldOption[] | object
}

export function createState(fields: InitialFields = {}): State {
  const state: State = {}
  Object.keys(fields).forEach(name => {
    const value = fields[name]
    if (Array.isArray(value)) {
      const val = value.length === 0 ? null : value[0].value

      state[name] = {
        original: val,
        value: val,
        options: value
      }
    } else {
      state[name] = {
        original: value,
        value
      }
    }
  })
  return state
}
