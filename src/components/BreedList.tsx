import React, { useContext, useState } from "react";
import { BreedContext } from "../context/BreedContext";
import "./BreedList.css";

export const ToDoList: React.FC = () => {
  const breeds = useContext(BreedContext);
  const [breedSearch, setBreedSearch] = useState<string>("");

  breeds && console.log(breeds.breeds);

  const onBreedSearchChange = (event: { target: { value: string } }) => {
    setBreedSearch(event.target.value);
  };

  const onSearchClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setBreedSearch("");
  };

  return (
    <>
      <div className="breedList row">
        <div className="m-3 breedNav col-m-12 d-inline-flex justify-content-end">
          <form className="form-inline">
            <div className="form-group">
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
        </div>
        <div className="w-100"></div>
        <div className="breedList col-sm-12 overflow-auto">
          {breeds &&
            breeds.breeds !== null &&
            breeds.breeds.map(breed => (
              <div
                key={breed.id}
                className="list-group-item clearfix m-1 border-top-0 border-right-0 border-left-0 rounded-0 d-flex flex-row shadow-sm bg-white rounded"
              >
                <h6 className="list-group-item-heading link">{breed.name}</h6>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
