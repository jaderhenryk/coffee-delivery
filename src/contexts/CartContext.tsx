import produce from "immer"
import { createContext, ReactNode, useEffect, useState } from "react"
import { CartItem } from "../models/CartItem.interface"

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
	cartItems: CartItem[]
	cartQuantity: number
	cartItemsTotal: number
	addCoffeeToCart: (coffee: CartItem) => void
	increaseCartItemQuantity: (cartItemId: number) => void;
	decreaseCartItemQuantity: (cartItemId: number) => void;
	removeCartItem: (cartItemId: number) => void;
	clearCart: () => void;
}

const CART_STORAGE_KEY = "@coffee-delivery:cart-items"

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [ cartItems, setCartItems ] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  })
  
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const cartQuantity = cartItems.length
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
		return total + cartItem.price * cartItem.quantity
	}, 0)

  function addCoffeeToCart(cartItem: CartItem) {
    const coffeeInCartIndex = cartItems.findIndex(item => cartItem.id === item.id)
    const updatedCart = produce(cartItems, draft => {
      coffeeInCartIndex == -1 ? draft.push(cartItem) : draft[coffeeInCartIndex].quantity += cartItem.quantity
    })
    setCartItems(updatedCart)
  }
  function increaseCartItemQuantity(cartItemId: number) {
    const coffeeInCartIndex = cartItems.findIndex(item => item.id === cartItemId)
    const updatedCart = produce(cartItems, draft => {
      if (coffeeInCartIndex != -1) {
        // const coffeInCart = draft[coffeeInCartIndex]
        draft[coffeeInCartIndex].quantity += 1
      }
    })
    setCartItems(updatedCart)
  }
  function decreaseCartItemQuantity(cartItemId: number) {
    const coffeeInCartIndex = cartItems.findIndex(item => item.id === cartItemId)
    const updatedCart = produce(cartItems, draft => {
      if (coffeeInCartIndex != -1) {
        // const coffeInCart = draft[coffeeInCartIndex]
        draft[coffeeInCartIndex].quantity -= 1
      }
    })
    setCartItems(updatedCart)
  }
  function removeCartItem(cartItemId: number) {
    const coffeeInCartIndex = cartItems.findIndex(item => item.id === cartItemId)
    const updatedCart = produce(cartItems, draft => {
      coffeeInCartIndex != -1 && draft.splice(coffeeInCartIndex, 1)
    })
    setCartItems(updatedCart)
  }
  function clearCart() {
    setCartItems([])
  }

  return (
	<CartContext.Provider
    value={{
      cartQuantity,
      cartItems,
      cartItemsTotal,
      addCoffeeToCart,
      increaseCartItemQuantity,
      decreaseCartItemQuantity,
      removeCartItem,
      clearCart
    }}
	>
    {children}
	</CartContext.Provider>
  )
}