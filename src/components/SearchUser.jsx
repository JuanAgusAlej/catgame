import React from "react";
import { useState } from "react";

const SearchUser = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                value={inputValue}
                placeholder="Search user..."
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="col">
            <button className="btn btn-sm" onClick={() => setInputValue("")}>
              search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchUser;
