import { Minus, Plus } from "phosphor-react";
import { QuantityInputContainer, QuantityInputIcon } from "./styles";

interface QuantityInputProps {
  quantity: number
  size?: 'small' | 'medium'
  onIncreaseQty: () => void
  onDecreaseQty: () => void
}

export function QuantityInput({ quantity, size = 'medium', onIncreaseQty, onDecreaseQty }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <QuantityInputIcon 
        disabled={quantity <= 1}
        onClick={onDecreaseQty}
      >
        <Minus size={14} weight="fill"/>
      </QuantityInputIcon>
      <input type="number" value={quantity} readOnly />
      <QuantityInputIcon onClick={onIncreaseQty}>
        <Plus size={14} weight="fill"/>
      </QuantityInputIcon>
    </QuantityInputContainer>
  )
}