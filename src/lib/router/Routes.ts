import { getMatch } from "./getMatch"

export interface Route {
  path: string
  view: (props) => any
  exact?: boolean
}

export interface RoutesProps {
  routes: Route[]
  routeProps?: any
}

export function Routes(props: RoutesProps) {
  const { routes, routeProps = {} } = props
  return routes.reduce((prev, next) => {
    if (prev) {
      return prev
    }
    const match = getMatch(location.pathname, next.path, next.exact || false)
    return match ? next.view({ ...routeProps, match }) : null
  }, null)
}
