import { combineReducers } from '@reduxjs/toolkit'
import moviesReducer from './slices/moviesSlice'
import loadingReducer from './slices/loadingSlice'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  loading: loadingReducer,
})

export type RootState = ReturnType<typeof rootReducer>
