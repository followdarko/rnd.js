import styled, { keyframes } from 'styled-components'
import { themeGet } from 'styled-system'
import { transform, boxShadow } from './helpers/style'

const hover = props => keyframes`
  0% { text-shadow: 3px -1px 0 ${themeGet('colors.secondary')(props)}; }
  25% { text-shadow: 0px -3px 0 ${themeGet('colors.secondary')(props)}; }
  50% { text-shadow: -3px -1px 0 ${themeGet('colors.secondary')(props)}; }
  75% { text-shadow: 0px -3px 0 ${themeGet('colors.secondary')(props)}; }
  100% { text-shadow: 3px -1px 0 ${themeGet('colors.secondary')(props)}; }
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${themeGet('colors.primary')};

  padding: 25px 68px 20px;

  font-family: Gotham Pro;
  line-height: 24px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 800;

  color: ${themeGet('colors.bg')};
  ${props => boxShadow({ boxShadow: themeGet('shadows')(props) })};
  transition: text-shadow 0.16s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    animation: ${hover} 60s linear infinite;
  }

  &:active {
    ${props => transform({ transform: themeGet('offsets')(props) })};
    box-shadow: 1px 1px 0px ${themeGet('colors.shadow')};
  }
`

export default Button
