// To finish

export type BinaryOperand = "EQ" | "NEQ" | "LT" | "LTE" | "GT" | "GTE"
export type UnaryOperand =
  | "EXISTS"
  | "NOT_EXISTS"
  | "MIN"
  | "NOT_MIN"
  | "MAX"
  | "NOT_MAX"
export type Operand = BinaryOperand | UnaryOperand

export interface Condition {
  attribute?: string
  operand: Operand
  value?: any
}

export interface Attribute {
  key: string
  inverse: boolean
}

export type Aggregator = "AVG" | "COUNT" | "EXISTS" | "MIN" | "MAX"

export interface Query {
  entity: string
  attributes: Attribute[]
  conditions: Condition[]
  aggregator?: Aggregator
}
