import { useState } from "react";
import Card from "./Card";

export default function CardList({ ostfalia, paris }) {
  const [subjectArray, setSubjectArray] = useState(ostfalia.subjects);
  const [subjectArrayParis, setSubjectArrayParis] = useState(paris.subjects);

  return (
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
  );
}
