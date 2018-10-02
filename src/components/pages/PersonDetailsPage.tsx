import { h } from "hyperapp"

import { PersonPanel } from "modules/components"
import { Match } from "lib/router"

import "./PersonDetailsPage.scss"

export interface PersonDetailsPageProps {
  match: Match
}

export function PersonDetailsPage(props: PersonDetailsPageProps) {
  const id = props.match.params.id
  return (
    <div class="container">
      <PersonPanel id={id} key="person-details-page" />
    </div>
  )
}
