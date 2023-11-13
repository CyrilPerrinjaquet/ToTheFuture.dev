import Banner from "./Commands/Banner";
import { FaMoon, FaLightbulb } from "react-icons/fa6";
import { useLocalStorageState } from "./CustomHooks/useLocalStorageState";
import { useEffect } from "react";

export default function Header() {
  const [themeMode, setThemeMode] = useLocalStorageState("theme", "dark");

  useEffect(() => {
    if (themeMode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [themeMode]);

  return (
    <div className="flex justify-between items-start">
      <Banner />
      <div className="m-7">
        <button
          className="bg-white p-2 rounded-md"
          onClick={() =>
            themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark")
          }
        >
          {themeMode === "dark" ? (
            <FaMoon size={24} />
          ) : (
            <FaLightbulb size={24} />
          )}
        </button>
      </div>
    </div>
  );
}
