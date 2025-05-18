import { NavLink } from "react-router"
import logo from "@assets/images/logo.webp"
import { CustomImage } from "@components"
import React from "react";

export const Logo = React.memo(() => {

	return (
		<NavLink to="/">
			<CustomImage>
				<img src={logo} alt="Rick and Morty logo" />
			</CustomImage>
		</NavLink>
	)
})