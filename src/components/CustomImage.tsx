import styled from "styled-components";
import type { CustomImageProps } from "@types";

const StyledCustomImage = styled.figure<CustomImageProps>`
overflow: hidden;

img {
border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
}
`;

export const CustomImage: React.FC<CustomImageProps> = ({ children, ...props }) => {

	return (
		<StyledCustomImage {...props}>
			{children}
		</StyledCustomImage>
	)
}