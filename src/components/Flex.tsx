import styled from "styled-components"

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	$direction?: string;
	$justify?: string;
	$align?: string;
	$margin?: string;
	$height?: string;
	$minHeight?: string;
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

export function Flex(props: FlexProps) {
	return (
		<StyledFlex {...props} />
	)
}