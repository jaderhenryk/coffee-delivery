import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${props => props.theme['base-background']};
  color: ${props => props.theme['base-text']};
}

body,
input,
textarea,
button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button {
  cursor: pointer;
}

.bg-base {
  background-color: ${props => props.theme['base-text']};
}
.bg-yellow-dark {
  background-color: ${props => props.theme['yellow-dark']};
}
.bg-yellow {
  background-color: ${props => props.theme['yellow']};
}
.bg-purple {
  background-color: ${props => props.theme['purple']};
}
`