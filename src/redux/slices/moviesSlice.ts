import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    upcomingMovies: [],
  },
  reducers: {
    obtainPopularMovies: (state, action) => {
      const { payload } = action

      const mostPopularMovies = payload?.filter(
        (movie: Record<string, any>, index: number) => index < 6
      )

      state.popularMovies = mostPopularMovies
    },
    obtainUpcomingMovies: (state, action) => {
      const { payload } = action

      const upcomingMovies = payload?.filter(
        (movie: Record<string, any>, index: number) => index < 6
      )

      state.upcomingMovies = upcomingMovies
    },
  },
})

export const { obtainPopularMovies, obtainUpcomingMovies } = moviesSlice.actions

export default moviesSlice.reducer
