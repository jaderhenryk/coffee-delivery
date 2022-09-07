import styled from 'styled-components'

export const HeaderContainer = styled.header`

width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 32px 160px;
/* gap: 820px; */

position: absolute;
height: 104px;
left: 0px;
right: 0px;
top: 0px;

  /* img {
    width: 5rem;
    height: 2.5rem;
    top: 32px;
    left: 160px
  } */

  nav {
    display: flex;
    gap: .75rem;
  }
`

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.5rem;
  height: 2.5rem;
  border-radius: 6px;
  border: none;
  padding: 0 .5rem;
  position: relative;
  font-size: 1rem;

  &.btn-purple {
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple']};

    > span {
      background-color: ${props => props.theme['purple-dark']};
    }
  }
  &.btn-yellow {
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow']};

    > span {
      background-color: ${props => props.theme['yellow-dark']};
    }
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1rem / 2);
    right: calc(-1rem / 2);
    color: ${props => props.theme['white']};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .75rem;
    font-weight: 700;
  }
`