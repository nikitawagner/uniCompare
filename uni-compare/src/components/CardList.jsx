import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function CardList({
  ostfalia,
  paris,
  setOstfalia,
  setParis,
  handleOpen,
  setSelectedSubject,
}) {
  const [subjectArray, setSubjectArray] = useState(ostfalia.subjects);
  const [subjectArrayParis, setSubjectArrayParis] = useState(paris.subjects);

  useEffect(() => {
    const updatedOstfalia = { ...ostfalia };
    updatedOstfalia.subjects = subjectArray;
    setOstfalia(updatedOstfalia);
  }, [subjectArray]);

  useEffect(() => {
    const updatedParis = { ...paris };
    updatedParis.subjects = subjectArrayParis;
    setParis(updatedParis);
  }, [subjectArrayParis]);

  const saveJsons = () => {
    const updatedOstfaliaJson = JSON.stringify(ostfalia, null, 2);
    const updatedParisJson = JSON.stringify(paris, null, 2);

    var dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(updatedOstfaliaJson);
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "ostfalia" + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(updatedParisJson);
    downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "paris" + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          color="success"
          style={{ margin: "10px" }}
          onClick={saveJsons}
        >
          Save
        </Button>
      </div>

      <div className="cardLists">
        <div className="ostfaliaList">
          {subjectArray.map((subject, key) => {
            return (
              <Card
                subject={subject}
                key={key}
                subjectArray={subjectArray}
                setSubjectArray={(updatedSubject) =>
                  setSubjectArray(updatedSubject)
                }
                colorUni={ostfalia.color}
                handleOpen={() => handleOpen()}
                setSelectedSubject={(subject) => setSelectedSubject(subject)}
              />
            );
          })}
        </div>

        <div className="parisList">
          {subjectArrayParis.map((subject, key) => {
            return (
              <Card
                subject={subject}
                key={key}
                subjectArray={subjectArrayParis}
                setSubjectArray={(updatedSubject) =>
                  setSubjectArrayParis(updatedSubject)
                }
                colorUni={paris.color}
                handleOpen={() => handleOpen()}
                setSelectedSubject={(subject) => setSelectedSubject(subject)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
