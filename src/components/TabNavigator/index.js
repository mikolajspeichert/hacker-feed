import React from 'react'
import styled from 'styled-components'
import { urls } from '../../constants'
import { colors } from '../../styled'

const Container = styled.div``

const NavigationPanel = styled.div`
  width: 15em;
  margin: auto;
  display: flex;
  justify-content: space-around;
`

const Button = styled.button`
  background-color: ${colors.orange};
  outline: none;
  cursor: pointer;
  color: ${colors.dirtyWhite};
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.25em 1.25em;
  border: none;
  border-radius: 0.3em;
  box-shadow: ${colors.gray} 0 1px 2px;
`

const Content = styled.div``

const TabNavigator = ({ onChange, selected, children }) => {
  return (
    <Container>
      <NavigationPanel>
        <Button
          selected={selected === urls.NEW_STORIES}
          onClick={() => {
            onChange(urls.NEW_STORIES)
          }}>
          NEW
        </Button>
        <Button
          selected={selected === urls.TOP_STORIES}
          onClick={() => {
            onChange(urls.TOP_STORIES)
          }}>
          TOP
        </Button>
      </NavigationPanel>
      <Content>{children}</Content>
    </Container>
  )
}

export default TabNavigator
