import { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ isDark: true, toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // SSR/프리렌더 시 window가 없으므로 기본값으로 시작하고, 클라이언트에서 실제 선호를 반영한다.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // 마운트 시 1회만 실제 선호를 반영한다(SSR/프리렌더와 hydration을 맞추기 위한 의도적 보정).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    );
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ isDark: theme === "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
