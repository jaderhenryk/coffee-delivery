import { forwardRef, InputHTMLAttributes } from "react"

import { InputContainer, InputStyled, InputStyleContainer, InputTip } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
	inputTip?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className, inputTip, ...props }, ref) => {
	return (
		<InputContainer className={className}>
			<InputStyleContainer hasError={!!error}>
				<InputStyled {...props} ref={ref} />
				{inputTip && <InputTip>{inputTip}</InputTip>}
			</InputStyleContainer>
			{error && <p>{error}</p>}
		</InputContainer>
	);
});