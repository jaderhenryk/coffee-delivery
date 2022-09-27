import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form"
import { useTheme } from "styled-components";

import { PaymentCard } from "../../../../../components/PaymentCard";
import { OrderFormTitle } from "../styles";
import { OrderPaymentContainer } from "./styles";

export const paymentMethods = {
	credit: {
		label: "Cartão de crédito",
		icon: <CreditCard size={16} />
	},
	debit: {
		label: "Cartão de débito",
		icon: <Bank size={16} />
	},
	money: {
		label: "Dinheiro",
		icon: <Money size={16} />
	}
};

export function OrderPaymentForm() {
  const theme = useTheme()
  const { register, formState: { errors }} = useFormContext()
  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <>
      <OrderFormTitle>
        <CurrencyDollar
          color={theme['purple']}
          size={22}
        />
        <div>
          <h3>Pagamento</h3>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </OrderFormTitle>
      <OrderPaymentContainer>
        {
          Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentCard
              id={key}
              icon={icon}
              label={label}
              key={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))
        }
        {
          paymentMethodError && <strong>{paymentMethodError}</strong>
        }
      </OrderPaymentContainer>
    </>
  )
}