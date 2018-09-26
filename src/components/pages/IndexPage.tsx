import { h } from "hyperapp"

import { State, Actions } from "modules"

import "./IndexPage.scss"
import { PersonPanel } from "modules/components/PersonPanel"

export interface IndexPageProps {
  state: State
  actions: Actions
}

export function IndexPage(props: IndexPageProps) {
  return (
    <div class="container">
      <h1>Index Page</h1>
      <div class="columns">
        <div class="col-6">
          <PersonPanel id="person-1" key="person-panel" />
        </div>
      </div>
    </div>
  )
}
