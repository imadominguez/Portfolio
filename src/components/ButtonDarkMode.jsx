import { useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

const ButtonDarkMode = () => {
  const [themeMode, setThemeMode] = useState("");
  const handleThemeMode = () => {
    const toggleDarkMode = document.documentElement.classList.toggle("dark");
    if (toggleDarkMode) {
      localStorage.setItem("theme", "dark");
      setThemeMode("dark");
    } else {
      localStorage.setItem("theme", "light");
      setThemeMode("light");
    }
  };
  return (
    <button onClick={handleThemeMode} className="h-12 rounded-lg p-2">
      {themeMode == "light" ? (
        <HiOutlineSun className="h-5 w-5" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ButtonDarkMode;
