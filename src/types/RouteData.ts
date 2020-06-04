interface RouteData {
  title: string
  path: string
  key?: string
  exact?: boolean
  component: React.ReactType
  routes?: Array<RouteData>
}

export default RouteData
