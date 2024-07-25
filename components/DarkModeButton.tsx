import { useDarkMode } from "@/hooks/DarkModeContext";
import { Switch } from "./ui/switch";
import { DarkModeButtonIcon } from "./ui/dark-mode-button";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="absolute top-7 right-24">
      {/* <Switch onClick={toggleDarkMode} checked={darkMode}/> */}
      <DarkModeButtonIcon onClick={toggleDarkMode} checked={darkMode}/>
    </div>
  );
};

export default DarkModeButton;
