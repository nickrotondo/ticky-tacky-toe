import { ReactElement, useEffect } from "react";
import { DarkToggle } from "./components/DarkToggle";
import { Box } from "./components/Box";

export default function App(): ReactElement {
  const board: string[] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  // Set the theme to auto on load
  document.documentElement.setAttribute("data-theme", "auto");

  return (
    <div className="h-screen bg-bkg">
      <div className="flex items-center flex-row justify-between px-16">
        <h1 className="text-5xl font-bold text-text1">Ticky Tacky Toe</h1>
        <DarkToggle />
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-rows-3 grid-cols-3">
          {board.map((box, index) => (
            <Box key={index} boxNumber={index + 1}></Box>
          ))}
        </div>

        <button className=" border-2 border-accent1 px-3 py-2 rounded-md text-accent1 hover:text-textOnDark hover:bg-accent1/90">
          New Game
        </button>
      </div>
    </div>
  );
}
