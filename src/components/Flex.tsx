import styled from "styled-components"

interface FlexProps {
	$direction?: string;
	$justify?: string;
	$align?: string;
	$margin?: string;
	$height?: string;
	$minHeight?: string;
	className?: string;
	children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
display: flex;
flex-direction: ${({ $direction }) => $direction || 'row'};
justify-content: ${({ $justify }) => $justify || 'stretch'};
align-items: ${({ $align }) => $align || 'stretch'};
margin: ${({ $margin }) => $margin || '0'};
height: ${({ $height }) => $height || ''};
min-height: ${({ $minHeight }) => $minHeight || ''};
`;

export const Flex: React.FC<FlexProps> = ({...props}) => {

	return (
		<StyledFlex {...props} />
	)
}