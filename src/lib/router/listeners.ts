import { Listener } from "./api"
import { getMatch } from "./getMatch"

export const LISTENERS: Listener[] = []

export function addListener(path: string, listener: Listener, exact?: boolean) {
  const l: any = () => {
    const result = getMatch(window.location.pathname, path, exact || false)
    if (result) {
      listener(result)
    }
  }
  l.__LISTENER = listener
  LISTENERS.push(l)

  l()
}

export function removeListener(listener: Listener) {
  const index = LISTENERS.findIndex(l => (<any>l).__LISTENER === listener)
  if (index >= 0) {
    LISTENERS.splice(index)
  }
}

export function notifyListeners() {
  LISTENERS.forEach(u => u())
}
