import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";
import JsonImport from "./components/JsonImport";

function App() {
  const [ostfaliaJson, setOstfaliaJson] = useState({});
  const [parisJson, setParisJson] = useState({});

  return (
    <div className="App">
      {JSON.stringify(ostfaliaJson) === "{}" ||
      JSON.stringify(parisJson) === "{}" ? (
        <div className="inputFields">
          <JsonImport
            name={"Ostfalia"}
            setUniJson={(json) => setOstfaliaJson(json)}
          />
          <JsonImport
            name={"Paris"}
            setUniJson={(json) => setParisJson(json)}
          />
        </div>
      ) : null}

      {JSON.stringify(ostfaliaJson) !== "{}" &&
      JSON.stringify(parisJson) !== "{}" ? (
        <CardList
          ostfalia={ostfaliaJson}
          paris={parisJson}
          setOstfalia={(updatedJson) => setOstfaliaJson(updatedJson)}
          setParis={(updatedJson) => setParisJson(updatedJson)}
        />
      ) : null}
    </div>
  );
}

export default App;
