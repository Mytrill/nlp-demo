import { State } from "api"

import * as logger from "lib/logger/state"
import * as router from "lib/router/state"

export const state: State = {
  logger: logger.state,
  router: router.state
}
