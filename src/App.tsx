import React, { useEffect, useContext, Provider, Consumer } from "react";
import "./App.css";
import { APIData } from "./interfaces/API";

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data: APIData[] = await resp.json();
    })();
  });

  return (
    <div className="App">
      <h1>App Läuft</h1>
    </div>
  );
};

export default App;
