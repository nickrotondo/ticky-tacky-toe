import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Sun, Moon } from "lucide-react";

export function DarkToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex justify-center items-center`}
        >
          {enabled ? <Moon /> : <Sun />}
        </span>
      </Switch>
    </div>
  );
}
