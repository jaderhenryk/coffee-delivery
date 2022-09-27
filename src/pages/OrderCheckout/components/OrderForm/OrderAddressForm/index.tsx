import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components";
import { Input } from "../../../../../components/Input";
import { OrderFormTitle } from "../styles";
import { OrderAddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: { message: string }
  }
}

export function OrderAddressForm() {
  const theme = useTheme()
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType
  return (
    <>
      <OrderFormTitle>
        <MapPinLine
          color={theme['yellow-dark']}
          size={22}
        />
        <div>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </OrderFormTitle>
      <OrderAddressFormContainer>
        <Input
          className="zip-code"
          type="number"
          placeholder="CEP"
          error={errors.zipCode?.message}
          {...register('zipCode')}
        />
        <Input
          placeholder="Rua"
          className="street"
          {...register("street")}
          error={errors.street?.message}
        />
        <Input
          placeholder="Número"
          type="number"
          {...register("number")}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complemento"
          className="complement"
          {...register("complement")}
          error={errors.complement?.message}
          inputTip="Opcional"
        />
        <Input
          placeholder="Bairro"
          {...register("neighborhood")}
          error={errors.neighborhood?.message}
        />
        <Input
          placeholder="Cidade"
          {...register("city")}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          {...register("uf")}
          error={errors.uf?.message}
        />
      </OrderAddressFormContainer>
    </>
  )
}