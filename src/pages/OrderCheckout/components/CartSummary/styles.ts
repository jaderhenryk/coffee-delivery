import styled from "styled-components"
import { BaseStyle } from "../../styles"

export const CartSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
  margin-top: 3rem;
  
  > h1 {
    font-family: ${props => props.theme['font-title']};
    font-size: 1.125rem;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 700;
    line-height: 1.15rem;
  }
`;

export const CartSummaryDetail = styled(BaseStyle)`
  display: flex;
  border-radius: 6px 44px;
  flex-direction: column;
`;