import { h } from "hyperapp"

import { State } from "../api"
import { Panel } from "lib/components/Panel"
import { PersonTile } from "./PersonTile"

interface PersonItemProps {
  id: string
}

function PersonItem(props: PersonItemProps) {
  return (
    <div class="col-6 p-2">
      <PersonTile id={props.id} />
    </div>
  )
}

export interface PersonListPanelProps {
  key: string
}

export function PersonListPanel(props: PersonListPanelProps) {
  const { key } = props
  return function(state: State) {
    const searchDone = !!state.people.search
    const results = state.people.search ? state.people.search.results : []
    return (
      <Panel>
        <Panel.Body visible={searchDone && results.length > 0}>
          <div class="columns">{results.map(PersonItem)}</div>
        </Panel.Body>
        <Panel.Body visible={searchDone && results.length === 0}>
          <div class="empty">
            <p class="empty-title h4">No results.</p>
            <p class="empty-subtitle">Your search did not yield any results.</p>
          </div>
        </Panel.Body>
        <Panel.Body visible={!searchDone}>
          <div class="empty">
            <p class="empty-title h4">You have not executed any search.</p>
            <p class="empty-subtitle">Search to see some results.</p>
          </div>
        </Panel.Body>
      </Panel>
    )
  }
}
