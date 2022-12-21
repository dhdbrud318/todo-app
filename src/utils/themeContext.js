import React from "react";

export const initialTheme = {
  theme: "light",
  setTheme: () => {},
};

const ThemeContext = React.createContext(initialTheme);
export default ThemeContext;
