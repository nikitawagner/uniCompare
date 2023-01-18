import Flag from "@mui/icons-material/Flag";

export default function Card({ subject }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="flagDiv">
          <Flag color={subject.marked ? "warning" : ""} />
        </div>
        <div className="headlineDiv">
          {subject.name} ({subject.cp}CP)
        </div>
      </div>
      <div>Topics: {subject.description}</div>
      <div>Requirements: {subject.requirements}</div>
    </div>
  );
}
