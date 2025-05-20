import React from "react";
import { useTheme } from "@hooks";
import { Button } from "./Button";
import { ThemeIcon } from "./ThemeIcon";

export const ThemeToggle = React.memo(() => {
	const { darkTheme, toggleTheme } = useTheme();

	return (
		<>
			<Button $isAnimate={true} onClick={() => toggleTheme()}>
				{darkTheme
					? <ThemeIcon color="#f8fc03"/>
					: <ThemeIcon color="#0324fc" />}
			</Button>
		</>
	);
})