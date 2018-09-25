import { ActionsType } from "hyperapp"
import { State, Actions } from "api"

import * as logger from "lib/logger/actions"
import * as router from "lib/router/actions"

export const actions: ActionsType<State, Actions> = {
  logger: logger.actions,
  router: router.actions
}
