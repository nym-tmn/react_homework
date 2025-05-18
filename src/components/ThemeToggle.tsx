import React from "react";
import { useTheme } from "@hooks";
import { Button } from "./Button";

export const ThemeToggle = React.memo(() => {
	const { darkTheme, toggleTheme } = useTheme();

	return (
		<Button $backgroundColor="transparent" $backgroundColorHover="gray" onClick={() => toggleTheme()}>
			{darkTheme ? "☀️" : "🌙"}
		</Button>
	);
})