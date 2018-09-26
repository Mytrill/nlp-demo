import { h } from "hyperapp"

import { State, Actions } from "modules/api"
import { Header, Body, Footer } from "components"

import "./view.scss"

export function view(state: State, actions: Actions) {
  return (
    <div class="view">
      <Header state={state} actions={actions} />
      <Body state={state} actions={actions} />
      <Footer state={state} actions={actions} />
    </div>
  )
}
