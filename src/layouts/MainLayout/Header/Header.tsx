import { useEffect, useState } from "react";
import { styled } from "styled-components"
import { Flex } from "@components"
import { Clock, Logo, Title } from "@layouts"

const StyledHeader = styled.header`
border-bottom: 1px solid #bdbfbb;
margin-bottom: 25px;
`;

export const Header = () => {

	const [time, setTime] = useState(() => new Date());

	useEffect(() => {
		const timeId = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timeId);
	}, [])

	return (
		<StyledHeader>
			<Flex $justify="space-between" $align="center" $margin="0 20px" $height="100px">
				<Logo />
				<Title />
				<Clock time={time}/>
			</Flex>
		</StyledHeader>
	)
}