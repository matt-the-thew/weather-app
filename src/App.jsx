import { useState } from "react";
import "./App.css";
import MainPanel from "./Components/MainPanel";
import TitlePanel from "./Components/TitlePanel";

function App() {
  return (
    <>
      <TitlePanel />
      <MainPanel />
    </>
  );
}

export default App;
