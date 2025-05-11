import type { PropsWithChildren } from "react"
import { styled } from "styled-components"

const StyledTitle = styled.h1`
font-weight: 600;
font-size: 34px;
`;

export function Title({ children }: PropsWithChildren) {
	return (
		<StyledTitle>
			{children}
		</StyledTitle>
	)
}