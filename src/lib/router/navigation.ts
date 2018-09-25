import { intercept } from "./interceptors"
import { notifyListeners } from "./listeners"

export function push(url) {
  if (window.location.pathname === url) {
    return
  }

  if (intercept(url)) {
    history.pushState(null, undefined, url)
    notifyListeners()
  }
}

export function back() {
  history.back()
  notifyListeners()
}

export function forward() {
  history.forward()
  notifyListeners()
}

export function replace(url) {
  if (window.location.pathname === url) {
    return
  }

  if (intercept(url)) {
    history.replaceState(null, undefined, url)
    notifyListeners()
  }
}
