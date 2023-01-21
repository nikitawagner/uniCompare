import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";
import DetailsModal from "./components/DetailsModal";
import JsonImport from "./components/JsonImport";

function App() {
  const [ostfaliaJson, setOstfaliaJson] = useState({});
  const [parisJson, setParisJson] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState({});

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
          handleOpen={() => handleOpen()}
          setSelectedSubject={(subject) => setSelectedSubject(subject)}
        />
      ) : null}
      <DetailsModal
        open={open}
        handleClose={() => handleClose()}
        subject={selectedSubject}
      />
    </div>
  );
}

export default App;
