import { createContext, useContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeCtx {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeCtx>({ isDark: false, toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const STORAGE_KEY = "theme";
