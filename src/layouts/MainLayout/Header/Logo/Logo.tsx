import { NavLink } from "react-router"
import logo from "@assets/images/logo.webp"
import { CustomImage } from "@components"

export const Logo = () => {
	return (
		<NavLink to="/">
			<CustomImage>
				<img src={logo} alt="Rick and Morty logo" />
			</CustomImage>
		</NavLink>
	)
}