import { StringMap } from "lib/api"

export interface Person {
  id: string
  name: string
  title: string
  external: boolean
}

export interface SearchState {
  text: string
  results: string[]
}

export interface State {
  data: StringMap<Person>
  search?: SearchState
}

export interface UpdatePersonPayload extends Partial<Person> {
  id: string
}

export interface Actions {
  // create(person: Person): Promise<void>
  // delete(id: string): Promise<void>
  // update(payload: UpdatePersonPayload): Promise<void>
  search(query: string)
  clearSearch()
}
