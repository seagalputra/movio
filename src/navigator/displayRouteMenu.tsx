import React from 'react'
import { Link } from 'react-router-dom'

import RouteData from 'types/RouteData'

const displayRouteMenu = (routes: Array<RouteData>) => {
  const singleRoute = (route: RouteData) => {
    return (
      <li key={route.key}>
        <Link to={route.path}>{route.title}</Link>
      </li>
    )
  }

  return (
    <ul>
      {routes.map((route) => {
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          )
        }

        return singleRoute(route)
      })}
    </ul>
  )
}

export default displayRouteMenu
