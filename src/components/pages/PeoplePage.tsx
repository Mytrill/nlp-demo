import { h } from "hyperapp"

import { State, Actions } from "modules"
import { PersonListPanel } from "modules/components"

export interface PeoplePageProps {
  state: State
  actions: Actions
}

export function PeoplePage(props: PeoplePageProps) {
  return (
    <div class="container">
      <PersonListPanel key="person-list-panel" />
    </div>
  )
}
