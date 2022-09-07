import styled from 'styled-components'

export const LayoutContainer = styled.div`

max-width: 90rem;
height: calc(100vh - 10rem);
padding: 2rem 10rem;
margin: 0 auto;

background-color: ${props => props.theme['base-background']};

display: flex;
flex-direction: column;
`