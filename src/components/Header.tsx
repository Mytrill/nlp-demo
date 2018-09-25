import { h } from "hyperapp"

import { Status } from "lib/logger/components"
import { State, Actions } from "api"
import { Link } from "lib/router"

import "./Header.scss"

export interface HeaderProps {
  state: State
  actions: Actions
}

export function Header(props: HeaderProps) {
  const { state, actions } = props
  return (
    <header class="header navbar">
      <section class="navbar-section">
        <Link href="/" class="navbar-brand mx-2">
          NLP Demo
        </Link>
      </section>
      <section class="navbar-section">
        <Status state={state.logger} actions={actions.logger} />
      </section>
      <section>
        <a href="https://github.com/Mytrill/nlp-demo" class="btn btn-link">
          Github
        </a>
      </section>
    </header>
  )
}
