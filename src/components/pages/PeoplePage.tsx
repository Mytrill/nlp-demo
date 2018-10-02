import { h } from "hyperapp"

import { PersonListPanel } from "modules/components"

import "./PeoplePage.scss"

export interface PeoplePageProps {
  // nothing
}

export function PeoplePage(props: PeoplePageProps) {
  return (
    <div class="container">
      <PersonListPanel key="person-list" />
    </div>
  )
}
