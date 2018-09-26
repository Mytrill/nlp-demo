export interface Select {
  alias: string
  inverse: boolean
  attribute?: string
  aggregator?: string
}

export interface SourceEntity {
  type: "entity"
  alias: string
  entity: string
}

export interface SourceRelation {
  type: "relation"
  alias: string
  entity_alias: string
  attribute: string
}

export type Source = SourceEntity | SourceRelation

export interface Query {
  type: "query"
  select: Select[]
  sources: Source[]
}

export interface Error {
  type: "error"
  message: string
}

export type ParsedRequest = Query | Error

export type Status = "loading" | "waiting" | "error" | "success"
