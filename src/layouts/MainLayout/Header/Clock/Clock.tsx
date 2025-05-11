import { styled } from "styled-components"

const StyledClock = styled.time`
font-size: 18px;
min-width: 76px
`;

export const Clock = ({...props}: {time: Date}) => {

	return (
		<StyledClock>
			{props.time.toLocaleTimeString()}
		</StyledClock>
	)
}