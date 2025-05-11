import type { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledContentTitle = styled.div`
font-weight: 600;
font-size: 24px;
margin-bottom: 20px;
`;

export function ContentTitle({ children }: PropsWithChildren) {
	return (
		<StyledContentTitle>
			{children}
		</StyledContentTitle>
	)
}