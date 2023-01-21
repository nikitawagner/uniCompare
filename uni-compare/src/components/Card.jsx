import Flag from "@mui/icons-material/Flag";
import { useEffect } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Button from "@mui/material/Button";

export default function Card({
  subject,
  subjectArray,
  setSubjectArray,
  colorUni,
  handleOpen,
  setSelectedSubject,
}) {
  const color = colorUni;

  function compareMarked(a, b) {
    return b.marked - a.marked;
  }

  const setMark = (subjectArray, subject) => {
    updateMarked(subjectArray[findIndex(subject.id)], subjectArray);
    console.log();
  };

  const updateMarked = (subject, subjectArray) => {
    const subjectIndex = findIndex(subject.id);
    const updatedSubject = Object.assign({}, subjectArray[subjectIndex]);
    updatedSubject.marked = !subject.marked;
    const newSubjectArray = subjectArray.slice();
    newSubjectArray[subjectIndex] = updatedSubject;
    newSubjectArray.sort(compareMarked);
    setSubjectArray(newSubjectArray);
  };

  const findIndex = (id) => {
    return subjectArray.findIndex((subject) => subject.id === id);
  };

  const handleCardClick = () => {
    setSelectedSubject(subject);
    handleOpen();
  };

  return (
    <div
      className="card"
      style={
        subject.color === null
          ? { backgroundColor: color }
          : { backgroundColor: subject.color }
      }
    >
      <div className="cardHeader">
        <div className="flagDiv" onClick={() => setMark(subjectArray, subject)}>
          <Flag color={subject.marked ? "warning" : " "} />
        </div>
        <div className="headlineDiv">
          {subject.name} ({subject.cp}CP)
        </div>
      </div>
      <div>Semester: {subject.semester}</div>
      <div>Requirements: {subject.requirements}</div>
      <div
        style={{ marginTop: "20px" }}
        onClick={() => {
          handleCardClick();
        }}
      >
        <ControlPointIcon />
      </div>
    </div>
  );
}
