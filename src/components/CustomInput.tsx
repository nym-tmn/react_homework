import styled, { css } from "styled-components"
import type { CustomnInputProps } from "@types"

const StyledCustomnInput = styled.div<CustomnInputProps>`
align-self: ${({ $alignSelf }) => $alignSelf || 'flex-start'};
margin: ${({ $margin }) => $margin || '0'};
border: ${({ $border }) => $border || 'medium none black'};
border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
padding: ${({ $padding }) => $padding || '0'};
min-width: ${({ $minWidth }) => $minWidth || 'auto'};

label {
font-weight: 600;
}

input {
border-radius: 5px;
border: 2px solid #4fbaf0;
height: ${({ $height }) => $height || 'auto'};
min-width: ${({ $minWidthInput }) => $minWidthInput || 'auto'};

${({ $hasError }) => $hasError && css`
    border: 2px solid #fc0000;
  `}
}
`;

export const CustomnInput: React.FC<CustomnInputProps> = ({children, ...props}) => {
	return (
		<StyledCustomnInput {...props}>
			{children}
		</StyledCustomnInput>
	)
}