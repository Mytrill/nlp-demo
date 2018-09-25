import { h } from "hyperapp"

import { State, Actions } from "api"

import "./Body.scss"
import { Routes, replace } from "lib/router"
import { IndexPage } from "./pages/IndexPage"
import { AboutPage } from "./pages/AboutPage"

export interface BodyProps {
  state: State
  actions: Actions
}

export function Body(props: BodyProps) {
  return (
    <div>
      {Routes({
        routes: [
          { path: "/", view: IndexPage, exact: true },
          { path: "/about", view: AboutPage, exact: true },
          { path: "*", view: () => replace("/") && "" }
        ],
        routeProps: props
      })}
    </div>
  )
}
