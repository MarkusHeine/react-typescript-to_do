import React, { useContext } from "react";
import { APIData } from "../interfaces/API";
import { ToDoContext } from "../context/ToDoContext";

export const ToDoList: React.FC = () => {
  const toDos = useContext<APIData[] | null>(ToDoContext);

  return <div>läuft</div>;
};
