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
    <button
      onClick={handleThemeMode}
      className="rounded-lg p-2 dark:border-[1px] dark:border-white  dark:shadow-md dark:shadow-white/50"
    >
      {themeMode == "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
};

export default ButtonDarkMode;
