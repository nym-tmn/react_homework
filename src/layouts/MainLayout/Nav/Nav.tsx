import styled from "styled-components";
import { NavButton } from "@layouts";

const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
margin: 0 350px
`;

export const Nav = () => {
	return (
		<StyledNav>
			<NavButton to="/">Home</NavButton>
			<NavButton to="/characters">Characters</NavButton>
			<NavButton to="/locations">Locations</NavButton>
			<NavButton to="/episodes">Episodes</NavButton>
		</StyledNav>
	)
}