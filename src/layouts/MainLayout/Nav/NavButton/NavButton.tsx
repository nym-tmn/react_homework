import { Button } from "@components";
import { NavLink } from "react-router";

export const NavButton = ({ to, children }: { to: string; children: string }) => (
	<NavLink to={to} end>
		{({ isActive }) => (
			<Button $isActive={isActive}>
				{children}
			</Button>
		)}
	</NavLink>
);