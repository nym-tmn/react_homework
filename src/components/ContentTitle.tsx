import styled from "styled-components";

interface ContentTitleProps {
	$fontSize ?: string;
	$marginBottom?: string;
	children?: React.ReactNode;
}

const StyledContentTitle = styled.div<ContentTitleProps>`
font-weight: 600;
font-size: ${({ $fontSize }) => $fontSize || '16px'};
margin-bottom: ${({ $marginBottom }) => $marginBottom || '0'};
`;

export const ContentTitle: React.FC<ContentTitleProps> = ({ children, ...props }) => {

	return (
		<StyledContentTitle {...props}>
			{children}
		</StyledContentTitle>
	)
}