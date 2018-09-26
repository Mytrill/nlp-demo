import { h } from "hyperapp"

import { NaturalInput } from "lib/nlp/NaturalInput"
import { Link } from "lib/router"

import { State, Actions } from "modules"
import { getNlpStatus } from "modules/nlp/selectors"

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
        <NaturalInput
          status={getNlpStatus(state.nlp)}
          onSearch={actions.execute}
          placeholder="Ask anything..."
        />
      </section>
      <section>
        <Link href="/people" class="btn btn-link">
          People
        </Link>
      </section>
    </header>
  )
}
