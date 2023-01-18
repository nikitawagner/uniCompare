import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let datenbanken = {
    name: "Datenbanken",
    cp: 5,
    color: null,
    description: "ER-Diagramme, SQL",
    requirements: "/",
    marked: true,
  };

  let soe = {
    name: "Software Engineering",
    cp: 5,
    color: null,
    requirements: "/",
    description: "Design Patterns, GIT, SCRUM",
    marked: false,
  };

  const subjectArray = [datenbanken, soe];

  return (
    <div className="App">
      {subjectArray.map((subject) => {
        return <Card subject={subject} />;
      })}
    </div>
  );
}

export default App;
