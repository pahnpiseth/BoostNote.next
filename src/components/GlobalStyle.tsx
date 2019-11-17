import { createGlobalStyle } from 'styled-components'
import { backgroundColor, textColor } from '../lib/styled/styleFunctions'

export default createGlobalStyle`
  body {
    margin: 0;
    ${backgroundColor}
    ${textColor}
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize}px;
  }
  *:focus {
    outline: none;
  }

  button,
  input {
    outline: none;
  }

  a {
    color: inherit;
  }
  
  /* total width */
  ::-webkit-scrollbar {
    background-color: transparent;
    width:12px;
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.activeBackgroundColor};
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none
  }
`
