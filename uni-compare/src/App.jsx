import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";
import ostfalia from "./ostfalia.json";
import paris from "./paris.json";

function App() {
  // let datenbanken = {
  //   id: 1,
  //   name: "Datenbanken",
  //   cp: 5,
  //   color: null,
  //   description: "ER-Diagramme, SQL",
  //   requirements: "/",
  //   marked: false,
  // };

  // let soe = {
  //   id: 2,
  //   name: "Software Engineering",
  //   cp: 5,
  //   color: null,
  //   requirements: "/",
  //   description: "Design Patterns, GIT, SCRUM",
  //   marked: false,
  // };

  // let gdp = {
  //   id: 3,
  //   name: "Grundlagen der Programmierung",
  //   cp: 10,
  //   color: null,
  //   requirements: "/",
  //   description: "Basic Java Knowledge (Loops, if, Objects...)",
  //   marked: false,
  // };

  // let coma = {
  //   id: 4,
  //   name: "Computermathematik",
  //   cp: 5,
  //   color: null,
  //   requirements: "/",
  //   description: "Mathe halt",
  //   marked: false,
  // };

  // const [subjectArray, setSubjectArray] = useState([
  //   datenbanken,
  //   soe,
  //   gdp,
  //   coma,
  // ]);

  return (
    <div className="App">
      <CardList ostfalia={ostfalia} paris={paris} />
    </div>
  );
}

export default App;
