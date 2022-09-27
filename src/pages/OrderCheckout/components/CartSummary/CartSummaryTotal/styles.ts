import styled from "styled-components"

export const CartSummaryTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > div:not(.empty-cart) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: .875rem;
      font-weight: 400;
      font-family: ${props => props.theme['font-regular']};
      color: ${props => props.theme['base-text']};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      font-family: ${props => props.theme['font-regular']};
      color: ${props => props.theme['base-text']};
    }

    strong {
      font-size: 1.25rem;
			font-weight: 700;
			font-family: ${props => props.theme['font-regular']};
			color: ${props => props.theme['base-subtitle']};
    }
  }
`;

export const EmptyCartContainer = styled.div`
  > h3 {
    text-align: center;
  }
`;