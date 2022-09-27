import styled from "styled-components"
import { BaseStyle } from "../../styles"

export const OrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: 40rem;
  margin-top: 3rem;

  > h1 {
    font-size: 1.125rem;
    font-family: ${props => props.theme['font-title']};
    line-height: 1.15rem;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 700;
  }
`;

export const OrderFormInnerContainer = styled(BaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const OrderFormTitle = styled.div`
  display: flex;
  gap: .5rem;

  div {

    h3 {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.25rem;
      font-family: ${props => props.theme['font-regular']};
      color: ${props => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-family: ${props => props.theme['font-regular']};
      color: ${props => props.theme['base-text']};
      font-size: .875rem;
      line-height: 1.125rem;
    }
  }
`;