import { styled } from "styled-components"
import { Flex } from "@components"
import { Clock, Logo, Title } from "@layouts"

const StyledHeader = styled.header`
border-bottom: 1px solid #bdbfbb;
margin-bottom: 15px;
`;

export const Header = () => {
	return (
		<StyledHeader>
			<Flex $justify="space-between" $align="center" $margin="0 20px" $height="100px">
				<Logo />
				<Title>Rick and Morty API</Title>
				<Clock>12:34:45</Clock>
			</Flex>
		</StyledHeader>
	)
}