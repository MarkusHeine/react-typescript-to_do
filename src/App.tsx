import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import { APIData } from "./interfaces/API";
import { ToDoList } from "./components/toDoList";
import { ToDoContext } from "./context/ToDoContext";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<APIData[] | null>(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data: APIData[] = await resp.json();
      setToDos(data);
    })();
  }, [setToDos]);

  return (
    <div className="App">
      <h1>Der type ist</h1>
      <ToDoContext.Provider value={toDos}>
        <ToDoList />
      </ToDoContext.Provider>
    </div>
  );
};

export default App;
