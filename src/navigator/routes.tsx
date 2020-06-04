import { lazy } from 'react'

import RouteData from 'types/RouteData'

const HomePage = lazy(() => import('../scenes/HomePage'))
const MoviesPage = lazy(() => import('../scenes/MoviesPage'))

const routes: Array<RouteData> = [
  {
    title: 'Beranda',
    path: '/',
    key: 'ROOT',
    exact: true,
    component: HomePage,
  },
  {
    title: 'Daftar Film',
    path: '/movies',
    key: 'MOVIES',
    component: MoviesPage,
  },
]

export default routes
