import { call, put, takeEvery, all } from 'redux-saga/effects'

import { getPopularMovies, getUpcomingMovies } from 'apis/movies'
import { obtainPopularMovies, obtainUpcomingMovies } from './slices/moviesSlice'

function* fetchFeaturedMovies() {
  const [popularPayload, upcomingPayload]: Array<Record<
    string,
    any
  >> = yield all([call(getPopularMovies), call(getUpcomingMovies)])

  yield put(obtainPopularMovies(popularPayload.data.results))
  yield put(obtainUpcomingMovies(upcomingPayload.data.results))
}

function* watchFetchPopularMovies() {
  yield takeEvery('FETCH_FEATURED_MOVIES', fetchFeaturedMovies)
}

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()])
}
