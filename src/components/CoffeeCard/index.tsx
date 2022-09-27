import { useState } from "react"
import { useCart } from "../../hooks/useCart"

import { ShoppingCart } from "phosphor-react"

import { Coffee } from "../../models/coffee.interface"
import { moneyFormat } from "../../utils/moneyFormat"
import { QuantityInput } from "../QuantityInput"
import { 
  CoffeCardButtons,
  CoffeCardFooter,
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeeCardName,
  CoffeeCardTag 
} from "./styles"

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { cartItems, addCoffeeToCart } = useCart()
  const [ quantity, setQuantity ] = useState(() => {
    if (cartItems?.length === 0) {
      return 1
    }
    const coffeeInCart = cartItems.find(item => item.id === coffee.id)
    return coffeeInCart ? coffeeInCart.quantity : 1
  })

  function increaseQuantity() {
    setQuantity((state) => state + 1)
  }
  function decreaseQuantity() {
    setQuantity((state) => state - 1)
  }
  function handleAddCart() {
    const newCoffee = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(newCoffee)
  }
  
  return (
    <CoffeeCardContainer>
      <img src={coffee.photo} alt="" />
      <CoffeeCardTag>
        {
          coffee.tags.map(tag => 
            <span key={`${coffee.id}${tag}`}>{tag}</span>  
          )
        }
      </CoffeeCardTag>
      <CoffeeCardName>{coffee.name}</CoffeeCardName>
      <CoffeeCardDescription>{coffee.description}</CoffeeCardDescription>
      <CoffeCardFooter>
        <div>
          <span>R$</span>
          <h2>{moneyFormat(coffee.price)}</h2>
        </div>
        <CoffeCardButtons>
          <QuantityInput
            quantity={quantity}
            onIncreaseQty={increaseQuantity}
            onDecreaseQty={decreaseQuantity}
          />
          <button onClick={handleAddCart}>
            <ShoppingCart size={22} weight="fill"/>
          </button>
        </CoffeCardButtons>
      </CoffeCardFooter>
    </CoffeeCardContainer>
  )
}