export type Operand = "EQ" | "NEQ"

export interface ParsedCondition {
  attribute?: string
  operand: Operand
  value?: any
}

export interface ParsedAttribute {
  key: string
  inverse: boolean
}

export interface ParsedQuery {
  type: "simple_query"
  entity: string
  attributes: ParsedAttribute[]
  conditions: ParsedCondition[]
}

export interface Error {
  type: "error"
  message: string
}

export type ParsedRequest = ParsedQuery | Error

export type InputStatus = "loading" | "waiting" | "error" | "success"

export type EntryType = "user" | "error" | "reply"

export interface LogEntry {
  type: EntryType
  text: string
}
