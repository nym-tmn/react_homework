import type { PropsWithChildren } from "react"
import { styled } from "styled-components"

const StyledTitle = styled.h1`
font-weight: 600;
font-size: 34px;
`;

export const Title: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledTitle>
			{children}
		</StyledTitle>
	)
}