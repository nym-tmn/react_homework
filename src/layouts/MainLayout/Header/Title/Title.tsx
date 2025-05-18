import React from "react";
import { NavLink } from "react-router";
import { styled } from "styled-components"

const StyledTitle = styled.h1`
font-weight: 600;
font-size: 34px;
`;

export const Title = React.memo(() => {

	return (
		<StyledTitle>
			<NavLink to="/">Rick and Morty API</NavLink>
		</StyledTitle>
	)
})