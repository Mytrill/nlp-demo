import { h } from "hyperapp"

import { State, Actions } from "api"

import "./AboutPage.scss"

export interface AboutPageProps {
  state: State
  actions: Actions
}

export function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(props.state, null, 2)}</pre>
    </div>
  )
}
