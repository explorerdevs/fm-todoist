import * as React from "react";
import { useLocalStorage } from "../hooks";

const themes = ["theme-light", `theme-dark`];

const ThemeContext = React.createContext({
  theme: null,
  setTheme: null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("current-theme", themes[0]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context == undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }

  const { theme, setTheme } = context;
  const [themeLoaded, setThemeLoaded] = React.useState(false);

  const toggleTheme = () => {
    themeLoaded &&
      setTheme((prev) =>
        prev === "theme-light" ? `theme-dark` : `theme-light`
      );
  };

  React.useEffect(() => {
    setThemeLoaded(true);

    const element = document.querySelector(":root");
    element?.setAttribute("data-theme", theme);
    setTheme(theme);

    return () => {
      setThemeLoaded(false);
    };
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
