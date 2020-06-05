import axios from 'axios'

import getBaseUrl from './getBaseUrl'

const getPopularMovies = (): Promise<Object> => {
  const url = getBaseUrl('/movie/popular')

  return axios.get(url)
}

const getUpcomingMovies = (): Promise<Object> => {
  const url = getBaseUrl('/movie/upcoming')

  return axios.get(url)
}

export { getPopularMovies, getUpcomingMovies }
