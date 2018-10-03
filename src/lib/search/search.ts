import { DataStore, StringMap } from "../api"
import { Query, Condition, Attribute } from "./api"

export type SearchResultType =
  | "count"
  | "single_value"
  | "exists"
  | "value_list"

export interface SearchResult {
  type: SearchResultType
  values: any
}

function getValue(entityType: string, entity: any, condition: Condition): any {
  if (condition.attribute) return entity[condition.attribute]
  if (entityType === "people") return entity.name
  return entity
}

function satisfyCondition(
  entityType: string,
  entity: any,
  condition: Condition
): boolean {
  const value = getValue(entityType, entity, condition)
  switch (condition.operand) {
    case "EQ":
      if (typeof value === "string") {
        return value.toLowerCase().includes(condition.value.toLowerCase())
      }
      return value === condition.value
    case "NEQ":
      if (typeof value === "string") {
        return !value.toLowerCase().includes(condition.value.toLowerCase())
      }
      return value !== condition.value
    case "EXISTS":
      return value != null // !== null or undefined
    case "NOT_EXISTS":
      return value == null // === null or undefined
    case "GT":
    case "GTE":
    case "LT":
    case "LTE":
    case "MIN":
    case "NOT_MIN":
    case "MAX":
    case "NOT_MAX":
  }

  throw new Error("Not implemented")
}

interface GetAttributeValueFn {
  (entity: any, store: DataStore): any
}

const GET_VALUE_FUNCTIONS: StringMap<StringMap<GetAttributeValueFn>> = {
  departments: {},
  organisations: {},
  people: {
    // team(entity: Person, state: State) {
    //   return state.teams.data[entity.teamId]
    // }
  },
  teams: {}
}

function getAttributeValue(
  query: Query,
  store: DataStore,
  entity: any,
  attribute: Attribute
) {
  const getValueFn = GET_VALUE_FUNCTIONS[query.entity][attribute.key]
  if (getValueFn) {
    return getValueFn(entity, store)
  }
  const value = entity[attribute.key]
  return attribute.inverse ? !value : value
}

function getAttributes(query: Query, store: DataStore) {
  return function(entity: any) {
    if (query.attributes.length === 1) {
      return getAttributeValue(entity, store, entity, query.attributes[0])
    } else if (query.attributes.length > 1) {
      const result = {}
      query.attributes.forEach(attr => {
        result[attr.key] = getAttributeValue(
          entity,
          store,
          entity,
          query.attributes[0]
        )
      })
      return result
    }
    return entity
  }
}

export function search(store: DataStore, query: Query): SearchResult {
  const data = store[query.entity].data
  const values = Object.values(data)
    .filter(entity =>
      query.conditions.reduce(
        (prev, condition) =>
          prev && satisfyCondition(query.entity, entity, condition),
        true
      )
    )
    .map(getAttributes(query, store))

  if (!query.aggregator) {
    if (values.length === 1) return { type: "single_value", values: values[0] }
    return { type: "value_list", values }
  }

  switch (query.aggregator) {
    case "COUNT":
      return { type: "count", values: values.length }
    case "EXISTS":
      return { type: "exists", values: values.length > 0 }
    case "AVG":
    case "MIN":
    case "MAX":
      throw new Error("Not supported yet")
  }
}
