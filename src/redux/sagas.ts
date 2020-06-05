import { call, put, takeEvery, all } from 'redux-saga/effects'

import getPopularMovies from 'apis/movies'
import { obtainPopularMovies } from './slices/moviesSlice'

function* fetchPopularMovies() {
  const payload = yield call(getPopularMovies)
  yield put(obtainPopularMovies(payload.data.results))
}

function* watchFetchPopularMovies() {
  yield takeEvery('FETCH_POPULAR_MOVIES', fetchPopularMovies)
}

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()])
}
