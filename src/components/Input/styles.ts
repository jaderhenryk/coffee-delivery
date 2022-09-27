import styled, { css } from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
  position: relative;

  > p {
    color: ${props => props.theme['error']};
    font-size: .875rem;
  }
`;

interface InputStyleContainerProps {
  hasError?: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.652rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme['base-button']};
  background-color: ${props => props.theme['base-input']};
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${props => props.theme['yellow-dark']};
  }

  ${props => props.hasError && css`
    border-color: ${props.theme['error']};
  `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  outline: none;

  color: ${props => props.theme['base-text']};
  font-size: .75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`;

export const InputTip = styled.span`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${props => props.theme['base-label']}
`;