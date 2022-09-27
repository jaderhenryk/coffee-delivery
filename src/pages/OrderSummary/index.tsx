import { Clock, CurrencyDollar, MapPin } from "phosphor-react"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { useTheme } from "styled-components"
import OrderSummaryImg from '../../assets/order-summary.png'
import { OrderData } from "../OrderCheckout"
import { paymentMethods } from "../OrderCheckout/components/OrderForm/OrderPaymentForm"
import { IconText, OrderSummaryContainer, OrderSummaryDetail, OrderSummaryIcon, OrderSummaryIconContainer } from "./styles"

interface ParamsType {
  state: OrderData
}

export function OrderSummary() {
  const theme = useTheme()

  const { state } = useLocation() as unknown as ParamsType
  const navigate = useNavigate()

  useEffect(() => {
    !state && navigate('/')
  }, [])

  return (
    <OrderSummaryContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <section>
        <OrderSummaryDetail>
          <OrderSummaryIconContainer>
            <OrderSummaryIcon iconBg={theme['purple']}>
              <MapPin weight="fill" />
            </OrderSummaryIcon>
            <IconText>
              Entrega em
              <strong> {state.street}, {state.number}</strong>
              <br/>
              {state.neighborhood} - {state.city}, {state.uf}
            </IconText>
          </OrderSummaryIconContainer>

          <OrderSummaryIconContainer>
            <OrderSummaryIcon iconBg={theme['yellow']}>
              <Clock weight="fill" />
            </OrderSummaryIcon>
            <IconText>
              Previsão de entrega <br/>
              <strong>20 min - 30 min</strong>
            </IconText>
          </OrderSummaryIconContainer>

          <OrderSummaryIconContainer>
            <OrderSummaryIcon iconBg={theme['yellow-dark']}>
              <CurrencyDollar weight="fill" />
            </OrderSummaryIcon>
            <IconText>
              Pagamento na entrega <br/>
              <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </IconText>
          </OrderSummaryIconContainer>
        </OrderSummaryDetail>
        <img src={OrderSummaryImg} />
      </section>
    </OrderSummaryContainer>
  )
}