import React from 'react'

import RouteData from 'types/RouteData'

const routes: Array<RouteData> = [
  {
    title: 'Beranda',
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <h1>Home Page</h1>,
  },
  {
    title: 'Daftar Film',
    path: '/movies',
    key: 'MOVIES',
    component: () => <h1>MOVIES</h1>,
  },
]

export default routes
