import { combineReducers } from 'redux'
import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {
  isLoading: false,
  items: [],
  url: '',
}

const feed = createReducer(initialState, {
  [actions.CLEAR_FEED]() {
    return initialState
  },
  [actions.FEED_LOADING](state, payload) {
    return {
      ...state,
      isLoading: true,
      url: payload,
    }
  },
  [actions.FEED_FETCH_SUCCESS](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      items: payload,
    }
  },
})

export default combineReducers({
  feed,
})
