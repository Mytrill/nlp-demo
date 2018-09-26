import { h } from "hyperapp"

import { State, Actions } from "../api"
import { Panel } from "lib/components/Panel"
import { get } from "../ui/selectors"

export interface PersonPanelProps {
  id: string
  key: string
}

export function PersonPanel(props: PersonPanelProps) {
  const { id, key } = props

  return function(state: State, actions: Actions) {
    const person = state.people.data[id]
    if (!person) {
      return (
        <Panel>
          <Panel.Header>
            <Panel.Title children="Error 404: Not found" />
          </Panel.Header>
          <Panel.Body>
            <p>Error, the person with id "{id}" could not be found.</p>
          </Panel.Body>
        </Panel>
      )
    }

    const tab = get(state.ui, key, "tab") || "details"

    return (
      <Panel>
        <Panel.Header class="text-center">
          <Panel.Title children={person.name} />
          <Panel.Subtitle children={person.title} />
        </Panel.Header>
        <Panel.Tabs>
          <Panel.Tab
            label="Details"
            id="details"
            selected={tab === "details"}
            onSelect={() => {}}
          />
          <Panel.Tab
            label="Teams"
            id="teams"
            selected={tab === "teams"}
            onSelect={() => {}}
          />
          <Panel.Tab
            label="Projects"
            id="projects"
            selected={tab === "projects"}
            onSelect={() => {}}
          />
        </Panel.Tabs>
        <Panel.Body>
          <Panel.Value
            label="External"
            value={person.external ? "Yes" : "No"}
          />
        </Panel.Body>
      </Panel>
    )
  }
}
