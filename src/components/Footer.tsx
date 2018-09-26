import { h } from "hyperapp"

import { State, Actions } from "modules"

import "./Footer.scss"
import { Link } from "lib/router"

export interface FooterProps {
  state: State
  actions: Actions
}

export function Footer(props: FooterProps) {
  return (
    <div>
      <footer class="footer navbar">
        <section class="navbar-section" />
        <section class="navbar-center">
          <a href="https://github.com/Mytrill/nlp-demo" target="_blank">
            Github
          </a>
          |<Link href="/about">About</Link>
        </section>
        <section class="navbar-section" />
      </footer>
    </div>
  )
}
