import { h } from "hyperapp"

import { State, Actions } from "modules"

import "./DashboardPage.scss"
import { PersonListPanel } from "modules/components"

export interface DashboardPageProps {
  state: State
  actions: Actions
}

export function DashboardPage(props: DashboardPageProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      <PersonListPanel key="dashboard-person-list" />
    </div>
  )
}
