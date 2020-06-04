import React from 'react'

import routes from 'navigator/routes'
import RenderRoutes from 'navigator/RenderRoutes'
import displayRouteMenu from 'navigator/displayRouteMenu'

import NavigationBar from 'components/NavigationBar'

import styles from 'assets/styles/App.module.scss'

const App: React.FC<{}> = () => {
  return (
    <div className={styles.container}>
      <NavigationBar>{displayRouteMenu(routes)}</NavigationBar>
      <div style={{ textAlign: 'center' }}>
        <RenderRoutes routes={routes} />
      </div>
    </div>
  )
}

export default App
