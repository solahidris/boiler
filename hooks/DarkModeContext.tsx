import { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode) {
        setDarkMode(JSON.parse(savedMode));
      }
      setIsMounted(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(newMode));
      }
      return newMode;
    });
  };

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", darkMode ? "business" : "nord");
    }
  }, [darkMode, isMounted]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={isMounted && darkMode ? "dark" : ""}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};