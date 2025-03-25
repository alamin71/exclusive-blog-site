import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Initial Theme Load (Handle SSR issue)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Default Theme
  });

  // Update Theme & Save to LocalStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.className = theme; // Add 'dark' or 'light' class to root element
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Theme Toggle Function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
