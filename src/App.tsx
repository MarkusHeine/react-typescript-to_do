import React, { useEffect, useState } from "react";
import "./App.css";
import { ToDoList } from "./components/toDoList";
import { BreedContext } from "./context/BreedContext";
import { BreedAPI } from "./interfaces/BreedApi";
import * as secrets from "./secrets.json";

const App: React.FC = () => {
  const [selectedToDo, setSelectedToDo] = useState(null);
  const [breeds, setBreeds] = useState<BreedAPI[] | null>(null);

  console.log(breeds);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://api.thecatapi.com/v1/breeds", {
        method: "get",
        headers: new Headers({ "x-api-key": secrets.REACT_APP_CAT_API })
      });
      const data: BreedAPI[] = await resp.json();
      setBreeds(data);
    })();
  }, [setBreeds]);

  return (
    <div className="App">
      <BreedContext.Provider value={{ breeds: breeds }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-center align-items-md-center">
              <ToDoList />
            </div>
            <div className="col-sm-6 d-flex justify-content-center align-items-md-center">
              show job details here
            </div>
          </div>
        </div>
      </BreedContext.Provider>
    </div>
  );
};

export default App;
