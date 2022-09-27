import { Button } from "../../../../../components/Button";
import { useCart } from "../../../../../hooks/useCart";
import { moneyFormat } from "../../../../../utils/moneyFormat";
import { CartSummaryTotalContainer, EmptyCartContainer } from "./styles";

export function CartSummaryTotal() {
  const SHIPPING_PRICE = 3.5

  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = SHIPPING_PRICE + cartItemsTotal

  return (
    <CartSummaryTotalContainer>
      {
        cartQuantity <= 0 ?
          <EmptyCartContainer className="empty-cart">
            <h3>Não há produtos no seu carrinho</h3>
          </EmptyCartContainer>
        :
        <>
          <div>
            <span>Total de Itens</span>
            <p>{moneyFormat(cartItemsTotal)}</p>
          </div>
          <div>
            <span>Entrega</span>
            <p>{moneyFormat(SHIPPING_PRICE)}</p>
          </div>
          <div>
            <strong>Total</strong>
            <strong>{moneyFormat(cartTotal)}</strong>
          </div>
          <Button
            text="Confirmar Pedido"
            disabled={cartQuantity <= 0}
            type="submit"
          />
        </>
      }
    </CartSummaryTotalContainer>
  )
}