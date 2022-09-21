import styled from "styled-components"

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const CoffeeCardTag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['yellow-dark']};
    font-size: .625rem;
    text-transform: uppercase;
    padding: .25rem .5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const CoffeeCardName = styled.span`
  margin-bottom: .5rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${props => props.theme['base-subtitle']};
  font-family: ${props => props.theme['font-title']};
  text-align: center;
`;

export const CoffeeCardDescription = styled.span`
  font-weight: 400;
  font-size: .875rem;
  line-height: 1.2rem;
  color: ${props => props.theme['base-label']};
  text-align: center;
  font-family: ${props => props.theme['font-regular']};
  margin-bottom: 2rem;
`;

export const CoffeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  div > span {
    font-size: .875rem;
    font-weight: 400;
    font-family: ${props => props.theme['font-regular']};
    color: ${props => props.theme['base-text']};
  }

  div > h2 {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: ${props => props.theme['font-title']};
    color: ${props => props.theme['base-text']};
    line-height: 1.2rem;
  }
`;

export const CoffeCardButtons = styled.div`
  width: 7.5rem;

  > button {
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['base-card']};
    border-radius: 6px;
    margin-left: .3rem;
    transition: .4s;

    &:hover {
      background-color: ${props => props.theme['purple']};
    }
  }
`;