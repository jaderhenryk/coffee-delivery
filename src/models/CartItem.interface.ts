import { Coffee } from "./coffee.interface";

export interface CartItem extends Coffee {
  quantity: number
}