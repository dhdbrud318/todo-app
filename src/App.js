import React, { useState } from "react";
import ThemeContext, { initialTheme } from "./utils/themeContext";

import Homepage from "./pages/homepage";

function App() {
  const [theme, setTheme] = useState(initialTheme.theme);
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App theme--${theme}`}>
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
