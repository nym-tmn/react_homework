import type { PropsWithChildren } from "react"
import { styled } from "styled-components"

const StyledClock = styled.time`
font-size: 18px;
`;

export const Clock: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledClock>
			{children}
		</StyledClock>
	)
}