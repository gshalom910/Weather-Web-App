import React from "react";
import "../search.css";

function SearchForm() {
  return (
    <form id="searchForm">
      <div className="input-group pb-5 py-md-0 px-2 px-md-5">
        <input
          className="form-control mx-2 mx-md-3"
          type="search"
          placeHolder="Enter City . . ."
          aria-label="Search"
          autoFocus="on"
        />
        <span className="input-group-append">
          <button
            className="btn btn-outline-secondary  bg-white border-start-0 border-bottom-0 border ms-n5"
            type="button"
          >
            <i className="fa fa-search"></i>
          </button>
        </span>
        <button
          className="btn btn-primary my-0 ms-2 ms-md-5  px-2 px-md-4"
          type="submit"
        >
          Search
        </button>
        <button
          className="btn btn-danger my-0 ms-1 ms-md-3  px-1 px-md-2"
          id="current-tmp"
          type="submit"
        >
          Current
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
