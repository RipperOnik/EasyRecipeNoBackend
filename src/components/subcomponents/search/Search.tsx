import React from "react";
import { useState } from "react";




function Search() {
  let [text, setText] = useState("")

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>){
    setText(event.target.value)
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    
  }

  return (
    <form className="d-flex" onSubmit={(e) => submitHandler(e)}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={changeHandler}
        value={text}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
