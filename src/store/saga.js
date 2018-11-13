import { put, takeLatest } from 'redux-saga/effects'
import api, { parseResponse } from '../api'
import { urls, STORIES_MAX } from '../constants'

import { actions, createActionWithError, createAction } from './actions'

function* requestFeed({ payload: { url } }) {
  try {
    yield put(createAction(actions.FEED_LOADING, url))
    const response = yield api.get(url)
    const top = parseResponse(response)
      .slice(0, STORIES_MAX)
      .map(id => api.get(urls.STORY(id)))
    const result = (yield Promise.all(top)).map(parseResponse)
    yield put(createAction(actions.FEED_FETCH_SUCCESS, result))
  } catch (e) {
    yield put(createActionWithError(actions.FEED_FETCH_ERROR, e))
  }
}

export default function* saga() {
  yield takeLatest(actions.FETCH_FEED, requestFeed)
}
