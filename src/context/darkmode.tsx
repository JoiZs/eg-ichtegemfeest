import React, { createContext, useEffect, useState } from "react";

export const darkContext = createContext<any>([]);

const DarkmodeCtx = (props: any) => {
  const [darkMode, setDarkMode] = useState(
    sessionStorage.getItem("colorMode") === "dark"
  );
  if (darkMode) {
    document.documentElement.classList.add("dark");
    sessionStorage.setItem("colorMode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    sessionStorage.setItem("colorMode", "light");
  }

  useEffect(() => {
    if (sessionStorage.getItem("colorMode") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <darkContext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </darkContext.Provider>
  );
};

export default DarkmodeCtx;
