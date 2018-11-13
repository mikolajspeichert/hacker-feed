import React from 'react'
import styled from 'styled-components'

import { colors, media } from '../../styled'

const ItemContainer = styled.div`
  margin: 1em auto;
  padding: 1.25em 1.25em 3em;
  width: 80%;
  height: 3em;
  border: ${colors.gray} 1px solid;
  background-color: ${colors.lightWhite};
  border-radius: 0.25em;
  display: flex;
  position: relative;
  box-shadow: ${colors.gray} 0 1px 3px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 1.25em;
  font-weight: 500;
`

const TitlePlaceholder = styled.div`
  background-color: ${colors.gray};
  opacity: 0.3;
  width: 100%;
  height: 1.25em;
`

const Author = styled.span`
  margin: 0.25rem;
  color: ${colors.gray};
  font-size: 1rem;
`

const DateDisplay = styled.p`
  margin: 0.5rem;
  color: ${colors.gray};
  font-size: 1em;
  ${media.max.md`
    font-size: 9px;
  `};
  position: absolute;
  bottom: 0;
  right: 0;
`

const DatePlaceholder = styled.div`
  margin: 0.5rem;
  background-color: ${colors.gray};
  opacity: 0.3;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 1.25em;
`

const Visit = styled.a`
  position: absolute;
  padding: 0.5em;
  border-radius: 0.2em;
  background-color: ${colors.orange};
  color: ${colors.dirtyWhite};
  box-shadow: ${colors.gray} 0 2px 2px;
  text-align: center;
  text-decoration: none;
  width: 100px;
  left: calc(50% - 50px - 0.25em);
  bottom: 0.5em;
`

const VisitPlaceholder = styled(Visit)`
  height: 1.5em;
  opacity: 0.3;
`

const FeedItem = ({ by, url, title, time }) => {
  const author = `by ${by}`
  const dateString = new Date(time * 1000).toLocaleString() // weird api
  return (
    <ItemContainer>
      <Title>
        {title}
        <Author>{author}</Author>
      </Title>
      <Visit href={url}>Show me!</Visit>
      <DateDisplay>{dateString}</DateDisplay>
    </ItemContainer>
  )
}

export const Placeholder = () => (
  <ItemContainer>
    <TitlePlaceholder />
    <VisitPlaceholder as="div" />
    <DatePlaceholder />
  </ItemContainer>
)

export default FeedItem
