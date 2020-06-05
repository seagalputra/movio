import axios from 'axios'

import getBaseUrl from './getBaseUrl'

const getPopularMovies = (): Promise<Object> => {
  const url = getBaseUrl('/movie/popular')

  return axios.get(url)
}

export default getPopularMovies
