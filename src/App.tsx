import { useState } from "react";
import "./App.css";
import { DarkToggle } from "./components/DarkToggle";

function App() {
  return (
    <div>
      <DarkToggle />
      <button className=" bg-blue-300 px-3 py-2 rounded-md ">New Game</button>
    </div>
  );
}

export default App;
