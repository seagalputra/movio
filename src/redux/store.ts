import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
})

export default store