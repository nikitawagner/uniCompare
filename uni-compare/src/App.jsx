import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";
import ostfalia from "./ostfalia.json";
import paris from "./paris.json";

function App() {
  const [ostfaliaJson, setOstfaliaJson] = useState(ostfalia);
  const [parisJson, setParisJson] = useState(paris);

  return (
    <div className="App">
      <CardList
        ostfalia={ostfaliaJson}
        paris={parisJson}
        setOstfalia={(updatedJson) => setOstfaliaJson(updatedJson)}
        setParis={(updatedJson) => setParisJson(updatedJson)}
      />
    </div>
  );
}

export default App;
