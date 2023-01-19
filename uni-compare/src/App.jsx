import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let datenbanken = {
    id: 1,
    name: "Datenbanken",
    cp: 5,
    color: null,
    description: "ER-Diagramme, SQL",
    requirements: "/",
    marked: true,
  };

  let soe = {
    id: 2,
    name: "Software Engineering",
    cp: 5,
    color: null,
    requirements: "/",
    description: "Design Patterns, GIT, SCRUM",
    marked: false,
  };

  const [subjectArray, setSubjectArray] = useState([datenbanken, soe]);

  return (
    <div className="App">
      {subjectArray.map((subject, key) => {
        return (
          <Card
            subject={subject}
            key={key}
            subjectArray={subjectArray}
            setSubjectArray={(updatedSubject) =>
              setSubjectArray(updatedSubject)
            }
          />
        );
      })}
    </div>
  );
}

export default App;
