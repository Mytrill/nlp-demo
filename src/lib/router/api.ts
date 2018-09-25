export interface Params {
  [key: string]: string
}

export interface Match {
  location: string
  path: string
  params: Params
}

export interface Listener {
  (match?: Match): void
}

export interface Interceptor {
  /** return false if prevent route change. */
  (newUrl: string): boolean
}

export interface State {
  location: string
}

export interface Actions {
  init()
  update()
}
