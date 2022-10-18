import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("current-theme", {
    current: "theme-light",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context == undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme((prev) =>
      prev.current === "theme-light" ? `theme-dark` : `theme-light`
    );
  };

  return {
    toggleTheme,
  };
};
