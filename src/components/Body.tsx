import { h } from "hyperapp"

import { State, Actions } from "modules"

import { Routes, replace } from "lib/router"
import { IndexPage } from "./pages/IndexPage"
import { AboutPage } from "./pages/AboutPage"
import { PeoplePage } from "./pages/PeoplePage"
import { DashboardPage } from "./pages/DashboardPage"
import { PersonDetailsPage } from "./pages/PersonDetailsPage"

import "./Body.scss"

export interface BodyProps {
  state: State
  actions: Actions
}

export function Body(props: BodyProps) {
  return (
    <div class="body">
      {Routes({
        routes: [
          { path: "/", view: IndexPage, exact: true },
          { path: "/about", view: AboutPage, exact: true },
          { path: "/people", view: PeoplePage, exact: true },
          { path: "/people/:id", view: PersonDetailsPage, exact: true },
          { path: "/dashboard", view: DashboardPage, exact: true },
          { path: "*", view: () => replace("/") && "" }
        ],
        routeProps: props
      })}
    </div>
  )
}
