import { createContext } from "react";
import { BreedContextInterface } from "../interfaces/BreedContext";

export const BreedContext = createContext<BreedContextInterface | null>(null);
