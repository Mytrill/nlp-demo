import { StringMap } from "lib/api"

export interface Team {
  id: string
  name: string
  people: StringMap<string>
}

export interface State {
  data: StringMap<Team>
}

export interface Actions {
  // TODO
}
