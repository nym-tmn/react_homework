import styled from "styled-components"
import type { CustomnInputProps } from "@types"

const StyledCustomnInput = styled.div<CustomnInputProps>`
align-self: ${({ $alignSelf }) => $alignSelf || 'flex-start'};
margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};

label {
font-weight: 600;
}

input {
border-radius: 5px;
border: 2px solid #4fbaf0;
}

`;

export const CustomnInput: React.FC<CustomnInputProps> = ({children, ...props}) => {
	return (
		<StyledCustomnInput {...props}>
			{children}
		</StyledCustomnInput>
	)
}