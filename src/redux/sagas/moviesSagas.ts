import { call, put, takeEvery, all } from 'redux-saga/effects'

import { getPopularMovies, getUpcomingMovies } from 'apis/movies'
import {
  obtainPopularMovies,
  obtainUpcomingMovies,
} from 'redux/slices/moviesSlice'
import { setLoading } from 'redux/slices/loadingSlice'

function* fetchFeaturedMovies() {
  yield put(setLoading(true))

  const [popularPayload, upcomingPayload]: Array<Record<
    string,
    any
  >> = yield all([call(getPopularMovies), call(getUpcomingMovies)])

  yield put(obtainPopularMovies(popularPayload.data.results))
  yield put(obtainUpcomingMovies(upcomingPayload.data.results))
  yield put(setLoading(false))
}

export default function* watchFetchPopularMovies() {
  yield takeEvery('FETCH_FEATURED_MOVIES', fetchFeaturedMovies)
}
