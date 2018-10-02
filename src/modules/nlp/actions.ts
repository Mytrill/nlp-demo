import { ActionsType } from "hyperapp"
import { State, Actions, LogEntry, Status, AddEntryPayload } from "./api"

function getStatus(entry: LogEntry): Status | null {
  switch (entry.type) {
    case "error":
      return "error"
    case "reply":
      return "success"
    case "user":
      return "loading"
  }
}

const MAX_DISPLAY_COUNT = 10

function getDisplayCount(payload: AddEntryPayload, state: State): number {
  if (payload.open === "single") return 2
  if (payload.open === "multi") return MAX_DISPLAY_COUNT
  return state.displayCount
}

export const actions: ActionsType<State, Actions> = {
  get() {
    return function(state: State) {
      return state
    }
  },
  set(payload: Partial<State>) {
    return payload
  },
  addEntry(payload: AddEntryPayload) {
    const { text, type } = payload
    return function(state: State): Partial<State> {
      const entries = state.entries.concat({ text, type })
      const status = getStatus(payload)
      const displayCount = getDisplayCount(payload, state)
      return { entries, status, displayCount }
    }
  },
  toggleChat() {
    return function(state: State): Partial<State> {
      const displayCount = state.displayCount > 0 ? 0 : MAX_DISPLAY_COUNT
      return { displayCount }
    }
  }
}
