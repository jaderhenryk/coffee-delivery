import styled from "styled-components"

export const OrderSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > div {
    margin-top: 4rem;

    h1 {
      font-size: 2rem;
      font-family: ${props => props.theme['font-title']};
      font-weight: 800;
      color: ${props => props.theme['yellow-dark']};
    }

    span {
      font-size: 1.25rem;
      font-family: ${props => props.theme['font-regular']};
      font-weight: 400;
      color: ${props => props.theme['base-subtitle']};
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderSummaryDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${props => props.theme['base-background']};
  min-width: 32rem;

  &::before {
    position: absolute;
    content: "";
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047F8 98.76%);
  }
`;

export const OrderSummaryIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`;

interface OrderSummaryIconProps {
  iconBg: string
}

export const OrderSummaryIcon = styled.div<OrderSummaryIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({iconBg}) => iconBg};
  color: ${(props => props.theme['white'])};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconText = styled.span`
  font-size: 1rem;
  font-family: ${props => props.theme['font-regular']};
  font-weight: 400;
  color: ${props => props.theme['base-text']};

  > strong {
    font-size: 1rem;
    font-family: ${props => props.theme['font-regular']};
    font-weight: 700;
    color: ${props => props.theme['base-text']};
  }
`;