import React from 'react'
import { Route } from 'react-router-dom'

import RouteData from 'types/RouteData'

const RouteWithSubRoutes: React.FC<RouteData> = (route: RouteData) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  )
}

export default React.memo(RouteWithSubRoutes)
