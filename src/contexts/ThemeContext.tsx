import { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ isDark: false, toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

const STORAGE_KEY = "theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // SSR/프리렌더 시 window가 없으므로 라이트를 기본으로 시작하고, 클라이언트에서 저장된 선택을 반영한다.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // 저장된 선택이 있으면 그대로 사용하고, 없으면 라이트를 기본으로 한다(OS 선호는 따르지 않음).
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    // 사용자의 선택을 기억해 다음 방문에도 유지한다.
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ isDark: theme === "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
