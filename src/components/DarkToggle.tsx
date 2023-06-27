import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { Sun, Moon } from "lucide-react";

export function DarkToggle() {
  const systemIsDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [enabled, setEnabled] = useState(systemIsDark);

  function handleSwitch() {
    setEnabled(!enabled);
    document.documentElement.setAttribute(
      "data-theme",
      enabled ? "light" : "dark"
    );
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setEnabled(newColorScheme === "dark");
      });

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          const newColorScheme = event.matches ? "dark" : "light";
          setEnabled(newColorScheme === "dark");
        });
    };
  }, []);

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={handleSwitch}
        className="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 bg-accent1"
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none h-[34px] w-[34px] transform rounded-full shadow-md ring-0 transition duration-200 ease-in-out flex justify-center items-center bg-secondary`}
        >
          {enabled ? <Moon /> : <Sun />}
        </span>
      </Switch>
    </div>
  );
}
