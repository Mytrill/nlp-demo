export interface StringMap<T> {
  [key: string]: T
}

export interface BaseState {
  ui: StringMap<StringMap<any>>
}

export interface UiSetPayload {
  widget: string
  key?: string
  value: any
}

export interface BaseActions {
  get(): BaseState
  setUi(payload: UiSetPayload)
}

export interface StateWithData<T> {
  data: StringMap<T>
}

// Our entire state-tree is partly a datastore
export interface DataStore extends StringMap<StateWithData<any>> {}
