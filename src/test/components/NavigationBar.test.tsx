import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from 'components/NavigationBar'

import routes from 'navigator/routes'
import displayRouteMenu from 'navigator/displayRouteMenu'

describe('<NavigationBar />', () => {
  it('have link to navigate user', () => {
    render(<NavigationBar>{displayRouteMenu(routes)}</NavigationBar>, {
      wrapper: BrowserRouter,
    })

    const homeLink = screen.getByText('Beranda')
    const moviesLink = screen.getByText('Daftar Film')

    expect(homeLink).toHaveAttribute('href', '/')
    expect(moviesLink).toHaveAttribute('href', '/movies')
  })
})
