import { h } from "hyperapp"

import { State, Actions } from "../api"
import { Panel } from "lib/components/Panel"
import { Person } from "../people/api"
import { PersonTile } from "./PersonTile"
import { SearchField } from "lib/components/SearchField"
import { getUiWidget } from "lib/selectors"

interface UiState {
  searchDone: boolean
  results: any[]
  query?: string
}

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
  return function(_: State, actions: Actions) {
    const state: UiState = getUiWidget(actions, key) || {
      searchDone: false,
      results: []
    }
    const { searchDone, results } = state
    return (
      <Panel>
        <Panel.Header>
          <SearchField
            key="person-list-search"
            placeholder="Search People..."
            onSearch={query => {}}
          />
        </Panel.Header>
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
