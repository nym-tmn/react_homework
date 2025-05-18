import { ThemeContext } from "@context";
import { useState } from "react";

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
	const [darkTheme, setDarkTheme] = useState(false);

	const toggleTheme = () => {
		setDarkTheme(prevTheme => !prevTheme);
	}

	return (
		<ThemeContext.Provider value={{darkTheme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}