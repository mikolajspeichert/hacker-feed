import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createAction, actions } from '../../store/actions'

import FeedItem, { Placeholder } from '../../components/FeedItem'
import TabNavigator from '../../components/TabNavigator'
import { urls } from '../../constants'

const withRedux = connect(
  state => state,
  dispatch => ({
    fetchFeed: type =>
      dispatch(createAction(actions.FETCH_FEED, { url: type })),
    clearFeed: type => {
      dispatch(createAction(actions.CLEAR_FEED))
      dispatch(createAction(actions.FETCH_FEED, { url: type }))
    },
  })
)

const Feed = ({ fetchFeed, clearFeed, feed: { url, isLoading, items } }) => {
  useEffect(() => {
    fetchFeed(urls.NEW_STORIES)
  }, [])

  return (
    <TabNavigator onChange={clearFeed} selected={url}>
      {isLoading
        ? [...Array(20)].map((_, i) => <Placeholder key={i} />) // eslint-disable-line
        : items
            .filter(Boolean)
            .map(({ id, ...props }) => <FeedItem key={id} {...props} />)}
    </TabNavigator>
  )
}

export default withRedux(Feed)
