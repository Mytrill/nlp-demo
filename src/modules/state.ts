import { State } from "./api"

import * as logger from "lib/logger/state"
import * as router from "lib/router/state"

import * as people from "./people/state"
import * as nlp from "./nlp/state"
import * as ui from "./ui/state"

export const state: State = {
  logger: logger.state,
  router: router.state,

  nlp: nlp.state,
  people: people.state,
  ui: ui.state
}
