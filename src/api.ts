import * as logger from "lib/logger/api"
import * as router from "lib/router/api"

export interface State {
  logger: logger.State
  router: router.State
}

export interface Actions {
  logger: logger.Actions
  router: router.Actions
}
