import { createGlobalStyle } from 'styled-components'

import { media } from './utils'

const colors = {
  dirtyWhite: '#F5F5ED',
  lightWhite: '#f9f9f7',
  orange: '#FF5A00',
  lightBlack: '#0f0f0f',
  gray: '#8E8E8E',
}

const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${colors.dirtyWhite};
      color: ${colors.lightBlack};
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      ${media.max.md`
        font-size: 12px;      
      `}
    }
  `

export { GlobalStyles, colors, media }
