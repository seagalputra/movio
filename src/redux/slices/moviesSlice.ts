import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
  },
  reducers: {
    obtainPopularMovies: (state, action) => {
      const { payload } = action

      const mostPopularMovies = payload?.filter(
        (movie: Record<string, any>, index: number) => index < 6
      )

      state.popularMovies = mostPopularMovies
    },
  },
})

export const { obtainPopularMovies } = moviesSlice.actions

export default moviesSlice.reducer
