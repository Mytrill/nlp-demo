import { h } from "hyperapp"

import { State, Actions } from "api"
import { Person } from "modules/people/api"

import "./IndexPage.scss"
import { PersonPanel } from "modules/components/PersonPanel"

export interface IndexPageProps {
  state: State
  actions: Actions
}

const person: Person = {
  id: "test",
  external: false,
  name: "John Doe"
}

export function IndexPage(props: IndexPageProps) {
  return (
    <div class="container">
      <h1>Index Page</h1>
      <div class="columns">
        <div class="col-1" />
        <div class="col-5">
          <PersonPanel person={person} tab="details" />
        </div>
      </div>
    </div>
  )
}
