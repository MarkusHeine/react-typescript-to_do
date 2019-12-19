import React, { useContext, useState } from "react";
import { BreedContext } from "../context/BreedContext";

export const ToDoList: React.FC = () => {
  const breeds = useContext(BreedContext);
  const [breedSearch, setBreedSearch] = useState<string>("");

  const onBreedSearchChange = (event: { target: { value: string } }) => {
    setBreedSearch(event.target.value);
  };

  const onSearchClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("i clicked");
    setBreedSearch("");
  };

  return (
    <>
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="breedSearch" className=" m-1">
            Breed
          </label>
          <input
            type="text"
            className="form-control  m-1"
            id="breedSearch"
            onChange={onBreedSearchChange}
            value={breedSearch}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-1"
          onClick={onSearchClick}
        >
          search
        </button>
      </form>
    </>
  );
};
