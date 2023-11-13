import Banner from "./Commands/Banner";
import { FaMoon, FaLightbulb } from "react-icons/fa6";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";
import { useEffect } from "react";

export default function Header() {
  const [themeMode, setThemeMode] = useLocalStorageState("theme", "dark");

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <div className="flex justify-between items-start smartphones:justify-end">
      <Banner />
      <div className="m-7 smartphones:m-2">
        <button
          className="dark:bg-white bg-black p-2 rounded-md"
          name="switch-light-mode-dark-mode-button"
          onClick={() =>
            themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark")
          }
        >
          {themeMode === "dark" ? (
            <FaMoon size={24} color="black" />
          ) : (
            <FaLightbulb size={24} color="white"/>
          )}
        </button>
      </div>
    </div>
  );
}
