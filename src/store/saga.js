import { put, takeLatest } from 'redux-saga/effects'
import api, { parseResponse } from '../api'
import { urls } from '../constants'

import { actions, createActionWithError, createAction } from './actions'

function* requestFeed({ payload: { url } }) {
  try {
    yield put(createAction(actions.FEED_LOADING, url))
    const response = yield api.get(url)
    const top20 = parseResponse(response)
      .slice(0, 20)
      .map(id => api.get(urls.STORY(id)))
    const result = (yield Promise.all(top20)).map(parseResponse)
    yield put(createAction(actions.FEED_FETCH_SUCCESS, result))
  } catch (e) {
    yield put(createActionWithError(actions.FEED_FETCH_ERROR, e))
  }
}

export default function* saga() {
  yield takeLatest(actions.FETCH_FEED, requestFeed)
}
