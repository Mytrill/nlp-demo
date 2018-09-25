import { Actions } from "./api"
import { LISTENERS, notifyListeners } from "./listeners"

export const actions: Actions = {
  update: () => ({ location: window.location.pathname }),
  init: () => (_, actions) => {
    LISTENERS.push(actions.update)
    notifyListeners()
  }
}
