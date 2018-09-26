export interface LogEntry {
  severity: "loading" | "success" | "error"
  text?: string
}

export interface State {
  entry?: LogEntry
}

export interface Actions {
  get(): State
  set(payload: Partial<State>)
}
