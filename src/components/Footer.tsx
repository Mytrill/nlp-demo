import { h } from "hyperapp"

import { State, Actions } from "api"

import "./Footer.scss"

export interface FooterProps {
  state: State
  actions: Actions
}

export function Footer(props: FooterProps) {
  return <div>Footer</div>
}
