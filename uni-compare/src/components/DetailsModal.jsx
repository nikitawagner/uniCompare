import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 8,
  borderRadius: "10px",
};

export default function DetailsModal({ open, handleClose, subject }) {
  function replaceWithBr() {
    if (subject.description !== undefined) {
      return subject.description.replaceAll("\\n", "<br /><br />");
    }
    return null;
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modalHeadline">{subject.name}</div>
          <br />
          <div className="modalDescription">
            <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
          </div>
          <br />
          <div className="modalFooter">
            <div className="modalFooterItem">
              Semester:
              <br />
              {subject.semester}
            </div>
            <div className="modalFooterItem">
              ECTS:
              <br />
              {subject.cp}
            </div>
            <div className="modalFooterItem">
              Requirements:
              <br />
              {subject.requirements}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
