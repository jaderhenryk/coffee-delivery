import { OrderAddressForm } from "./OrderAddressForm"
import { OrderPaymentForm } from "./OrderPaymentForm"

import { OrderFormContainer, OrderFormInnerContainer } from "./styles"

export function OrderForm () {
  return (
    <OrderFormContainer>
      <h1>Complete seu pedido</h1>
      <OrderFormInnerContainer>
        <OrderAddressForm/>
      </OrderFormInnerContainer>

      <OrderFormInnerContainer>
        <OrderPaymentForm/>
      </OrderFormInnerContainer>
    </OrderFormContainer>
  )
}