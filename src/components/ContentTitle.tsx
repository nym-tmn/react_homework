import styled from "styled-components";
import type { ContentTitleProps } from "@types";

const StyledContentTitle = styled.h2<ContentTitleProps>`
overflow-wrap: break-word;
font-weight: 600;
font-size: ${({ $fontSize }) => $fontSize || '16px'};
margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};
margin-top: ${({ $marginTop }) => $marginTop || '0'};
max-width: ${({ $maxWidth }) => $maxWidth || 'auto'};
text-align: ${({ $textAlign }) => $textAlign || 'start'};
color: ${({ $color }) => $color || 'black'};
`;

export const ContentTitle: React.FC<ContentTitleProps> = ({ as, children, ...props }) => {

	return (
		<StyledContentTitle as={as} {...props}>
			{children}
		</StyledContentTitle>
	)
}