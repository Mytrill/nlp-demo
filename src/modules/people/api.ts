import { StateWithData } from "lib/api"

export interface Person {
  id: string
  name: string
  title: string
  external: boolean
}

export interface SearchState {
  // text: string // later on, the toString() of the query...
  results: Person[]
}

export interface State extends StateWithData<Person> {
  search?: SearchState
}

export interface UpdatePersonPayload extends Partial<Person> {
  id: string
}

export interface Actions {
  set(payload: Partial<State>)
}
