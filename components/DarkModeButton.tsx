import { useDarkMode } from "@/hooks/DarkModeContext";
import { Switch } from "./ui/switch";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Switch onClick={toggleDarkMode} checked={darkMode}/>
    </div>
  );
};

export default DarkModeButton;
