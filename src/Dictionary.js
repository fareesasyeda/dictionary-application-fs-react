import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setresults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setresults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //Dictionary API documentation: "https://dictionaryapi.dev/"
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      {keyword}
      <Results results={results} />
    </div>
  );
}
