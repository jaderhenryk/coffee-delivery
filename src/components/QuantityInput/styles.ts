import styled, { css } from "styled-components"

interface QuantityInputContainerProps {
  size?: 'small' | 'medium'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  background-color: ${props => props.theme['base-button']};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${props => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }

  ${({size}) => size === 'medium' && css`
    padding: .5em;
  `}

  ${({size}) => size === 'small' && css`
    padding: .3rem .5rem;
  `}
`;

export const QuantityInputIcon = styled.button.attrs({
  type: 'button'
})`
  width: .875rem;
  height: .875rem;
  border: none;
  background: none;
  color: ${props => props.theme['purple']};
  transition: .4s;

  &:disabled {
    opacity: .4;
  }

  &:not(:disabled):hover {
    color: ${props => props.theme['purple-dark']}
  }
`