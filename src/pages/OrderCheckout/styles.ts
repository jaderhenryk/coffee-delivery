import styled from "styled-components"

export const OrderCheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const BaseStyle = styled.div`
  width: 100%;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`;