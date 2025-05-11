import { NavLink } from "react-router";

export function Nav() {
	return (
		<ul>
			<li>
				<NavLink to='/'>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to='/characters'>
					Characters
				</NavLink>
			</li>
			<li>
				<NavLink to='/locations'>
					Locations
				</NavLink>
			</li>
			<li>
				<NavLink to='/episodes'>
					Episodes
				</NavLink>
			</li>
		</ul>
	)
}