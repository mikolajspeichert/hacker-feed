import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1.5em 0;
`

const Text = styled.h1`
  font-size: 2.75em;
  font-weight: 300;
`

const BoldText = styled.span`
  color: ${colors.orange};
  font-weight: 700;
`

const Header = ({ boldText, normalText }) => (
  <Container>
    <Text>
      {normalText}
      <BoldText>{boldText}</BoldText>
    </Text>
  </Container>
)

export default Header
