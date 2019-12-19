import React, { useContext, useState, useEffect } from "react";
import { BreedContext } from "../context/BreedContext";
import "./BreedList.css";
import { BreedContextInterface } from "../interfaces/BreedContext";

export const ToDoList: React.FC = () => {
  const breeds = useContext(BreedContext);
  const [breedSearch, setBreedSearch] = useState<string>("");
  const [breedList, setBreedList] = useState<BreedContextInterface | null>();

  const onBreedSearchChange = (event: { target: { value: string } }) => {
    setBreedSearch(event.target.value);
    if (breeds && breeds.breeds !== null) {
      const result = breeds.breeds.filter(breed =>
        breed.name.toLowerCase().startsWith(event.target.value.toLowerCase())
      );
      console.log(result);
      setBreedList({ breeds: result });
    }
  };

  const onSearchClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setBreedSearch("");
  };

  useEffect(() => {
    setBreedList(breeds);
  }, [breeds]);

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
                autoComplete="off"
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
          {breedList &&
            breedList.breeds !== null &&
            breedList.breeds.map(breed => (
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
