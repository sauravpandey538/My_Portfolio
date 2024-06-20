import React, { createContext, useState, useContext, useEffect } from "react";
const WebsiteContextValue = createContext();
function WebsiteContextProvider({ children }) {
  const [theme, setTheme] = useState({
    text_color: "black",
    bg_color: "white",
  });
  const handleChangeTheme = () => {
    setTheme((prev) => ({
      text_color: prev.text_color === "white" ? "black" : "white",
      bg_color: prev.bg_color === "#2E2E2E" ? "white" : "#2E2E2E",
    }));
  };

  useEffect(() => {
    const time = new Date().getHours();
    if (time > 16 && time < 24) {
      setTheme({
        text_color: "white",
        bg_color: "#2E2E2E",
      });
    }
  }, []);
  return (
    <WebsiteContextValue.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </WebsiteContextValue.Provider>
  );
}
// making custom hooks

function useTheme() {
  const context = useContext(WebsiteContextValue);
  return context;
}

export { WebsiteContextProvider, useTheme };
