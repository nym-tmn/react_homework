import { createContext } from "react";

interface ThemeContextType {
	darkTheme: boolean;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);