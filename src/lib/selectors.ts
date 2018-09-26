import { BaseActions } from "./api"

export function getUiWidget(actions: BaseActions, widget: string): any {
  return actions.get().ui[widget]
}

export function getUiValue(
  actions: BaseActions,
  widget: string,
  key: string
): any {
  return (getUiWidget(actions, widget) || {})[key]
}
