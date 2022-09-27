import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import * as zod from 'zod'
import { useCart } from '../../hooks/useCart'
import { PaymentMethod } from '../../models/PaymentMethod.enum'

import { OrderForm } from "./components/OrderForm"
import { OrderCheckoutContainer } from "./styles"
import { CartSummary } from './components/CartSummary'

const orderValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'O CEP é um campo obrigatório.').max(8, 'O CEP deve possuir somente 8 dígitos'),
  street: zod.string().min(1, 'A rua é um campo obrigatório.'),
  number: zod.string().min(1, 'O número é um campo obrigatório.'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "O bairro é um campo obrigatório."),
  city: zod.string().min(1, "A cidade é um campo obrigatório."),
  uf: zod.string().min(1, "A UF é um campo obrigatório."),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: "Método de pagamento não informado." };
    }
  })
})

export type OrderData = zod.infer<typeof orderValidationSchema>

export function OrderCheckout() {
  const navigate = useNavigate()
  const { clearCart } = useCart()

  const orderFormValidation = useForm<OrderData>({
    resolver: zodResolver(orderValidationSchema)
  })

  const { handleSubmit } = orderFormValidation

  function handleSubmitOrder(data: OrderData) {
    navigate('/order-summary', { state: data })
    clearCart()
  }

  return (
    <FormProvider {...orderFormValidation}>
      <OrderCheckoutContainer className='container' onSubmit={handleSubmit(handleSubmitOrder)}>
        <OrderForm/>
        <CartSummary/>
      </OrderCheckoutContainer>
    </FormProvider>
  )
}