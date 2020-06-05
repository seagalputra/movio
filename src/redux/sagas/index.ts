import { all } from 'redux-saga/effects'

import watchFetchPopularMovies from './moviesSagas'

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()])
}
