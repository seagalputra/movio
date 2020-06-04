import React from 'react'
import { Switch, Route } from 'react-router-dom'

import RouteData from 'types/RouteData'

import RouteWithSubRoutes from './RouteWithSubRoutes'

/*
  This component is used when sub routes is available, 
  just call RenderRoutes in the routes configuration in routes.tsx file.
*/
const RenderRoutes: React.FC<{ routes: Array<RouteData> }> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  )
}

export default React.memo(RenderRoutes)
