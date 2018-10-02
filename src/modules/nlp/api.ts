export type EntryType = "user" | "error" | "reply"

export interface LogEntry {
  type: EntryType
  text: string
}
export type Status = "loading" | "success" | "error" | "waiting"

export interface State {
  entries: LogEntry[]
  status: Status
  displayCount: number
}

export interface AddEntryPayload {
  type: EntryType
  text: string
  open?: "single" | "multi"
}

export interface Actions {
  get(): State
  set(payload: Partial<State>): void
  addEntry(payload: AddEntryPayload): void
  toggleChat(): void
}
