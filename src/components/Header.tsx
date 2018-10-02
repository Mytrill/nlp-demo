import { h } from "hyperapp"

import { NaturalInput } from "lib/nlp/NaturalInput"
import { Link } from "lib/router"

import { State, Actions } from "modules"

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
          status={state.nlp.status}
          onSearch={actions.execute}
          placeholder="Ask anything..."
          onToggleChat={actions.nlp.toggleChat}
          displayCount={state.nlp.displayCount}
          entries={state.nlp.entries}
        />
      </section>
      <section>
        <Link href="/people" class="btn btn-link">
          People
        </Link>
        <Link href="/dashboard" class="btn btn-link text-bold">
          Dashboard
        </Link>
      </section>
    </header>
  )
}
