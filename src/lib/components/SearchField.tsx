import { h } from "hyperapp"
import { cc } from "lib/classcat"

import { BaseState, BaseActions } from "../api"
import { getUiWidget } from "../selectors"

export interface UiState {
  text: string
}

export interface SearchFieldProps {
  key: string
  onSearch(query: string)
  placeholder?: string
  hideSearchButton?: boolean
  class?: string
}

export function SearchField(props: SearchFieldProps) {
  const { key, onSearch, placeholder = "Search...", hideSearchButton } = props
  return function(_: BaseState, actions: BaseActions) {
    const state: UiState = getUiWidget(actions, props.key) || { text: "" }
    return (
      <form
        onsubmit={(e: Event) => {
          e.preventDefault()
          onSearch(state.text)
        }}
        class={cc(props.class)}
      >
        <div class="input-group">
          <input
            type="text"
            class="form-input"
            placeholder={placeholder}
            value={state.text}
            onchange={e => {
              actions.setUi({ widget: key, value: { text: e.target.value } })
              e.preventDefault()
            }}
          />
          {!hideSearchButton && (
            <button class="btn btn-primary input-group-btn">Search</button>
          )}
        </div>
      </form>
    )
  }
}
