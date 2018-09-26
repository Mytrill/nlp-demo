import * as logger from "lib/logger/api"
import * as router from "lib/router/api"
import { BaseState, BaseActions } from "lib/api"

import * as departments from "./departments/api"
import * as nlp from "./nlp/api"
import * as organisations from "./organisations/api"
import * as people from "./people/api"
import * as teams from "./teams/api"
import * as ui from "./ui/api"

export interface State extends BaseState {
  logger: logger.State
  router: router.State

  // departments: departments.State
  nlp: nlp.State
  // organisations: organisations.State
  people: people.State
  // teams: teams.State
  ui: ui.State
}

export interface Actions extends BaseActions {
  logger: logger.Actions
  router: router.Actions

  // departments: departments.Actions
  nlp: nlp.Actions
  // organisations: organisations.Actions
  people: people.Actions
  // teams: teams.Actions
  ui: ui.Actions

  execute(request: string): Promise<void>
}
