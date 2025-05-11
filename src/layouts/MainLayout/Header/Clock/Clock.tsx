import type { PropsWithChildren } from "react"
import { styled } from "styled-components"

const StyledClock = styled.time`
font-size: 18px;
`;

export function Clock({ children }: PropsWithChildren) {
	return (
		<StyledClock>
			{children}
		</StyledClock>
	)
}