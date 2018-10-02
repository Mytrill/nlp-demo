import { ActionsType } from "hyperapp"

import { State, Actions } from "./api"
import { UiSetPayload } from "lib/api"
import { getErrorMessage, delay } from "lib/utils"
import { parseRequestText } from "lib/nlp"
import { search } from "lib/search"

import * as logger from "lib/logger/actions"
import * as router from "lib/router/actions"

import * as people from "./people/actions"
import * as nlp from "./nlp/actions"
import * as ui from "./ui/actions"
import { push } from "lib/router"

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
      const { people } = state
      actions.nlp.addEntry({ text: request, type: "user" })
      return delay()
        .then(() => parseRequestText(request))
        .then(result => {
          console.log(`Parsed request "${request}", got query:`, result)
          switch (result.type) {
            case "error":
              actions.nlp.addEntry({ text: result.message, type: "error" })
              break
            case "simple_query":
              const searchResult = search({ people }, result)
              console.log(
                `Parsed request "${request}", got result:`,
                searchResult
              )
              switch (searchResult.type) {
                case "count":
                  actions.nlp.addEntry({
                    text: String(searchResult.values),
                    type: "reply",
                    open: "single"
                  })
                  break
                case "exists":
                  actions.nlp.addEntry({
                    text: searchResult.values ? "Yes" : "No",
                    type: "reply",
                    open: "single"
                  })
                  break
                case "single_value":
                  actions.nlp.addEntry({ text: "Found one!", type: "reply" })
                  push(`/${result.entity}/${searchResult.values.id}`)
                  break
                case "value_list":
                  actions.nlp.addEntry({
                    text: `I found ${
                      searchResult.values.length
                    } entities matching your search.`,
                    type: "reply"
                  })
                  switch (result.entity) {
                    case "people":
                      actions.people.set({
                        search: { results: searchResult.values }
                      })
                      break
                    default:
                      throw new Error("Unexpected entity: " + result.entity)
                  }
                  push(`/${result.entity}`)
                  break
              }
              break
            default:
          }
        })
        .catch(err => {
          console.log("Error", err)
          actions.nlp.addEntry({ text: getErrorMessage(err), type: "error" })
        })
    }
  }
}
