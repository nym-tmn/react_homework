import styled from "styled-components";
import type { CustomImageProps } from "@types";

const StyledCustomImage = styled.figure<CustomImageProps>`
overflow: hidden;
border-radius: ${({ $borderRadius }) => $borderRadius || '0'};

img {
max-width: ${({ $maxWidth }) => $maxWidth || 'auto'};
}
`;

export const CustomImage: React.FC<CustomImageProps> = ({ children, ...props }) => {

	return (
		<StyledCustomImage {...props}>
			{children}
		</StyledCustomImage>
	)
}