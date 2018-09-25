import { StringMap } from "lib/api"

export interface Person {
  id: string
  name: string
  external: boolean
}

export interface State {
  data: StringMap<Person>
}

export interface UpdatePersonPayload extends Partial<Person> {
  id: string
}

export interface Actions {
  create(person: Person): Promise<void>
  delete(id: string): Promise<void>
  update(payload: UpdatePersonPayload): Promise<void>
}
