import React, { Suspense } from 'react'
import Spinner from 'react-spinkit'
import Headroom from 'react-headroom'

import routes from 'navigator/routes'
import RenderRoutes from 'navigator/RenderRoutes'
import displayRouteMenu from 'navigator/displayRouteMenu'

import NavigationBar from 'components/NavigationBar'

import styles from 'assets/styles/App.module.scss'

const App: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <Headroom>
        <NavigationBar>{displayRouteMenu(routes)}</NavigationBar>
      </Headroom>
      <Suspense
        fallback={
          <div style={{ textAlign: 'center', marginTop: '0.67em' }}>
            <Spinner name="line-scale-pulse-out" />
          </div>
        }
      >
        <RenderRoutes routes={routes} />
      </Suspense>
    </div>
  )
}

export default App
