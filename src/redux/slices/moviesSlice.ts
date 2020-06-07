import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  popularMovies: Array<Record<string, any>>
  upcomingMovies: Array<Record<string, any>>
}

const getPopularMovies = (
  state: InitialState,
  action: PayloadAction<Array<Record<string, any>>>
) => {
  const { payload } = action

  const mostPopularMovies = payload?.filter(
    (movie: Record<string, any>, index: number) => index < 6
  )

  state.popularMovies = mostPopularMovies
}

const getUpcomingMovies = (
  state: InitialState,
  action: PayloadAction<Array<Record<string, any>>>
) => {
  const { payload } = action

  const upcomingMovies = payload?.filter(
    (movie: Record<string, any>, index: number) => index < 6
  )

  state.upcomingMovies = upcomingMovies
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    obtainPopularMovies: getPopularMovies,
    obtainUpcomingMovies: getUpcomingMovies,
  },
})

export const { obtainPopularMovies, obtainUpcomingMovies } = moviesSlice.actions

export default moviesSlice.reducer
