const getBaseUrl = (path: string): string => {
  const API_KEY = process.env['REACT_APP_MOVIE_KEY']

  return `https://api.themoviedb.org/3${path}?api_key=${API_KEY}&language=en-US`
}

export default getBaseUrl
