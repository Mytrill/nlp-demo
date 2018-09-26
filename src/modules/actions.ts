import { ActionsType } from "hyperapp"

import { State, Actions } from "./api"
import { UiSetPayload } from "lib/api"
import { getErrorMessage, delay } from "lib/utils"
import { parseRequestText } from "lib/nlp"

import * as logger from "lib/logger/actions"
import * as router from "lib/router/actions"

import * as people from "./people/actions"
import * as nlp from "./nlp/actions"
import * as ui from "./ui/actions"

export const actions: ActionsType<State, Actions> = {
  logger: logger.actions,
  router: router.actions,

  nlp: nlp.actions,
  people: people.actions,
  ui: ui.actions,
  get() {
    return function(state: State) {
      return state
    }
  },
  setUi(payload: UiSetPayload) {
    return function(_, actions: Actions) {
      actions.setUi(payload)
    }
  },
  execute(request: string) {
    return function(state: State, actions: Actions): Promise<void> {
      actions.nlp.set({ entry: { severity: "loading" } })
      return delay()
        .then(() => parseRequestText(request))
        .then(result => {
          switch (result.type) {
            case "error":
              actions.nlp.set({
                entry: { severity: "error", text: result.message }
              })
            case "query":
              actions.nlp.set({ entry: { severity: "success" } })
            // TODO execute the query
            default:
          }
        })
        .catch(err => {
          actions.nlp.set({
            entry: { severity: "error", text: getErrorMessage(err) }
          })
        })
    }
  }
}
