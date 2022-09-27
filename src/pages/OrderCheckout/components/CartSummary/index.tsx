import { useCart } from "../../../../hooks/useCart";
import { CoffeeCart } from "../CoffeeCart";
import { CartSummaryTotal } from "./CartSummaryTotal";
import { CartSummaryContainer, CartSummaryDetail } from "./styles";

export function CartSummary() {
  const { cartItems } = useCart()
  return (
    <CartSummaryContainer>
      <h1>Cafés Selecionados</h1>
      <CartSummaryDetail>
        {
          cartItems.map( cartItem => 
            <CoffeeCart
              key={cartItem.id}
              coffee={cartItem}
            />
          )
        }
        <CartSummaryTotal/>
      </CartSummaryDetail>
    </CartSummaryContainer>
  )
}