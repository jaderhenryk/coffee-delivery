import styled from "styled-components"

export const CoffeeListContainer = styled.section`
  margin-top: 2rem;
  width: 100%;

  h1 {
    font-size: 2rem;
    font-family: ${props => props.theme['font-title']};
  }
`;

export const CoffeeListContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`;