import { h } from "hyperapp"

import { State, Actions } from "../api"
import { Tile } from "lib/components/Tile"
import { get } from "../ui/selectors"

export interface PersonTileProps {
  id: string
}

export function PersonTile(props: PersonTileProps) {
  const { id } = props

  return function(state: State, actions: Actions) {
    const person = state.people.data[id]
    if (!person) {
      return (
        <Tile compact={true}>
          <Tile.Content>
            <Tile.Title children="Error 404: Not found" />
            <Tile.Subtitle children={`Cannot find person with id "${id}".`} />
          </Tile.Content>
        </Tile>
      )
    }

    return (
      <Tile compact={true}>
        <Tile.Content>
          <Tile.Title children={person.name} />
          <Tile.Subtitle children={person.title} />
        </Tile.Content>
      </Tile>
    )
  }
}
