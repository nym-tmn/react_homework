import styled from "styled-components";
import { NavButton } from "@layouts";
import { Flex } from "@components";

const StyledNavContainer = ({ className }: { className?: string }) => {
	return (
		<Flex
			className={className}
			as="nav" 
			$justify="space-between"
		>
			<NavButton to="/">Home</NavButton>
			<NavButton to="/characters">Characters</NavButton>
			<NavButton to="/locations">Locations</NavButton>
			<NavButton to="/episodes">Episodes</NavButton>
			<NavButton to="/extraPage">Extra Page</NavButton>
		</Flex>
	);
};

const StyledNav = styled(StyledNavContainer)`
margin-bottom: 25px;
padding: 0 350px;
`;

export const Nav = () => {
	return (
		<StyledNav />
	)
}