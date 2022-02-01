import React, { createContext, useEffect, useState } from "react";

export const darkContext = createContext<any>([]);

const DarkmodeCtx = (props: any) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
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
