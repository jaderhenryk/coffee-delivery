import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  /* gap: 820px; */

  position: relative;
  height: 104px;
  left: 0px;
  /* right: 0px; */
  top: 0px;

  div.container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: .75rem;
  }
`
interface HeaderButtonProps {
  variant: 'yellow' | 'purple'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
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

  ${({ variant, theme }) => css`
    background-color: ${theme[`${variant}-light`]};
    color: ${theme[`${variant}-dark`]};

    span {
      background-color: ${theme[`${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) => variant === 'purple' && css`
    svg {
      color: ${theme['purple']}
    }
  `}
`