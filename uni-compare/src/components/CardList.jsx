import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import Card from "./Card";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function CardList({ ostfalia, paris }) {
  const [subjectArray, setSubjectArray] = useState(ostfalia.subjects);
  const [subjectArrayParis, setSubjectArrayParis] = useState(paris.subjects);

  return (
    <>
      <div>
        <Button
          variant="contained"
          startIcon={<KeyboardArrowUpIcon />}
          style={{ margin: "10px" }}
        >
          Show Ostfalia
        </Button>
        <Button variant="contained" color="success" style={{ margin: "10px" }}>
          Save
        </Button>
        <Button
          variant="contained"
          startIcon={<KeyboardArrowUpIcon />}
          style={{ margin: "10px" }}
        >
          Show Paris
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
