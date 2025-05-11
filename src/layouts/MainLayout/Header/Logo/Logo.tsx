import { NavLink } from "react-router"
import logo from "@assets/images/logo.webp"

export const Logo = () => {
	return (
		<NavLink to="/">
			<img src={logo} alt="Rick and Morty logo" />
		</NavLink>
	)
}