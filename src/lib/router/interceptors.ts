import { Interceptor } from "./api"
import { notifyListeners } from "./listeners"

const INTERCEPTORS: Interceptor[] = []

export const intercept = (url: string): boolean =>
  INTERCEPTORS.reduce((prev, interceptor) => prev && interceptor(url), true)

window.onpopstate = e => {
  const allowed = intercept(window.location.href)
  if (!allowed) {
    e.preventDefault()
    e.stopImmediatePropagation()
    history.go(1)
  } else {
    notifyListeners()
  }
}

export function addInterceptor(interceptor: Interceptor): void {
  INTERCEPTORS.push(interceptor)
}

export function removeInterceptor(interceptor: Interceptor): void {
  const index = INTERCEPTORS.findIndex(i => i === interceptor)
  if (index >= 0) {
    INTERCEPTORS.splice(index)
  }
}
