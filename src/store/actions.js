const actions = {
  FETCH_FEED: 'FEED/fetch',
  FEED_FETCH_SUCCESS: 'FEED/success',
  FEED_FETCH_ERROR: 'FEED/error',
  FEED_LOADING: 'FEED/loading',
  CLEAR_FEED: 'FEED/clear',
}

const createAction = (type, payload) => ({ type, payload })

const createActionWithError = (type, error) => ({
  type,
  error,
})

export { actions, createAction, createActionWithError }
