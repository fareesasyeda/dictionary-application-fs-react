import React from "react";
import dictionary from "./dictionary.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={dictionary}
          className="App-dictionary-logo img-fluid"
          alt="dictionary-logo"
        />
      </header>
    </div>
  );
}
