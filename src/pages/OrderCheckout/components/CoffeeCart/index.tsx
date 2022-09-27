import { useCart } from "../../../../hooks/useCart"

import { Coffee, Trash } from "phosphor-react"

import { QuantityInput } from "../../../../components/QuantityInput"
import { CartItem } from "../../../../models/CartItem.interface"
import { moneyFormat } from "../../../../utils/moneyFormat"

import { CoffeeActions, CoffeeCartContainer } from "./styles"

interface CoffeeCartProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartProps) {
  const { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } = useCart()
  
  const coffeeTotal = coffee.price * coffee.quantity

  function handleIncreaseQuantity() {
    increaseCartItemQuantity(coffee.id)
  }

  function handleDecreaseQuantity() {
    decreaseCartItemQuantity(coffee.id)
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartContainer>
      <div>
        <img src={coffee.photo} alt={coffee.description} />
        <div>
          <h1>{coffee.name}</h1>
          <CoffeeActions>
            <QuantityInput
              onIncreaseQty={handleIncreaseQuantity}
              onDecreaseQty={handleDecreaseQuantity}
              quantity={coffee.quantity}
              size="small"
            />
            <button onClick={handleRemoveItem}>
              <Trash size={16}/>
              REMOVER
            </button>
          </CoffeeActions>
        </div>
      </div>
      <span>{moneyFormat(coffeeTotal)}</span>
    </CoffeeCartContainer>
  )
}