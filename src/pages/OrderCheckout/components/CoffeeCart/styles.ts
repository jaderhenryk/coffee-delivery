import styled from "styled-components"

export const CoffeeCartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > span {
    align-self: flex-start;
    font-size: 1rem;
    font-weight: 700;
    font-family: ${props => props.theme['font-regular']};
    color: ${props => props.theme['base-text']};
  }

  > div > div h1 {
    font-size: 1rem;
    font-weight: 400;
    font-family: ${props => props.theme['font-regular']};
    color: ${props => props.theme['base-title']};
  }
`;

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-top: .5rem;
  height: 2rem;

  > div {
    max-width: 6.5rem;
    height: 100%;
  }

  > button {
    display: flex;
    align-items: center;
    gap: .25rem;
    color: ${props => props.theme['base-text']};
    font-size: .75rem;
    height: 100%;
    border: none;
    background-color: ${props => props.theme['base-button']};
    padding: 0 .5rem;
    border-radius: 6px;
    transition: .2s;

    > svg {
      color: ${props => props.theme['purple']};
    }

    &:hover {
      background-color: ${props => props.theme['base-hover']};
    }
  }
`;