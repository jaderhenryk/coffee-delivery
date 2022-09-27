import styled from "styled-components"

export const OrderPaymentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;

  > strong {
    grid-column: span 3;
    color: ${props => props.theme['error']};
    font-size: 1.175rem;
    font-family: ${props => props.theme['font-regular']};
    font-weight: 400;
    margin-top: 0.875rem;
  }
`;