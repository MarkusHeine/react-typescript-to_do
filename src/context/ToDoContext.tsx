import { createContext } from "react";
import { APIData } from "../interfaces/API";

export const ToDoContext = createContext<APIData[] | null>(null);
