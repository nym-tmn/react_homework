import styled from "styled-components"
import type { FlexProps } from "@types";

const StyledFlex = styled.div<FlexProps>`
display: flex;
flex-direction: ${({ $direction }) => $direction || 'row'};
justify-content: ${({ $justify }) => $justify || 'stretch'};
align-items: ${({ $align }) => $align || 'stretch'};
margin: ${({ $margin }) => $margin || '0'};
height: ${({ $height }) => $height || 'auto'};
min-height: ${({ $minHeight }) => $minHeight || 'auto'};
flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
gap: ${({ $gap }) => $gap || '0'};
`;

export const Flex: React.FC<FlexProps> = ({as, ...props}) => {

	return (
		<StyledFlex as={as} {...props} />
	)
}