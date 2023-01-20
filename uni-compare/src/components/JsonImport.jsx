import { useDropzone } from "React-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useCallback } from "react";

export default function JsonImport({ name, setUniJson }) {
  const onDrop = useCallback((acceptedFiles) => {
    var reader = new FileReader();
    reader.addEventListener("loadend", function (event) {
      setUniJson(JSON.parse(event.target.result));
    });
    reader.readAsText(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/json": [".json"],
    },
    onDrop,
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps({ className: "dropzone" })}
      style={
        acceptedFiles.length === 0
          ? { backgroundColor: "#888888" }
          : { backgroundColor: "green" }
      }
    >
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <div className="dropzone-content">{name}</div>
        <CloudUploadIcon />
      </div>
    </div>
  );
}
