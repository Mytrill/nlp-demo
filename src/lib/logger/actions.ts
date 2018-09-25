import { ActionsType } from "hyperapp"
import { getErrorMessage } from "lib/utils"
import { State, InternalActions, LogEvent, LogPayload, LogEntry } from "./api"

function isLogEntry(entry: any): entry is LogEntry {
  const s = entry.severity
  return (
    s === "loading" ||
    s === "success" ||
    s === "info" ||
    s === "warning" ||
    s === "error"
  )
}

function isPromise(value: any): value is Promise<any> {
  return (
    value &&
    typeof value["then"] === "function" &&
    typeof value["catch"] === "function"
  )
}

function getEvent(payload: LogEvent | Promise<any>): LogEvent {
  if (isPromise(payload)) {
    return {
      promise: payload,
      success: "Action successful",
      error: e => `Error: ${getErrorMessage(e)}`
    }
  }

  return payload
}

export const actions: ActionsType<State, InternalActions> = {
  _log: (entry: LogEntry) => (state, actions) => {
    // clear success entries after a while
    if (entry && entry.severity === "success") {
      setTimeout(() => {
        actions.clearCurrent(entry)
      }, 3000)
    }

    return {
      current: entry,
      entries: state.entries.concat(entry)
    }
  },
  log: (payload: LogPayload) => (_, actions) => {
    if (!payload) {
      return
    }

    if (typeof payload === "function") {
      payload = payload()
    }

    if (isLogEntry(payload)) {
      actions._log(payload)
      return
    }

    const event = getEvent(payload)

    actions._log({ severity: "loading", message: event.loading })
    return event.promise
      .then(res => {
        const message =
          typeof event.success === "function"
            ? event.success(res)
            : event.success
        actions._log({ severity: "success", message })
        return res
      })
      .catch(e => {
        const message =
          typeof event.error === "function" ? event.error(e) : event.error
        actions._log({ severity: "error", message })
        throw e
      })
  },
  clearCurrent: (entry?: LogEntry) => state => {
    if (entry && entry !== state.current) {
      return
    }
    return { current: null }
  }
}
