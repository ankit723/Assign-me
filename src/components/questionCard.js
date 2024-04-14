import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  minHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const QuestionCard = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [questionUrls, setQuestionUrls] = useState([]);

  const handleOpen = (imageUrl) => {
    setQuestionUrls([imageUrl]);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  const downloadImagesAsPdf = async () => {
    const imagePromises = selectedRows.map((rowId) => {
      const question = props.questions.find((q) => q.id === rowId);
      return domtoimage.toPng(document.getElementById(`question-${rowId}`));
    });
  
    const imageUrls = await Promise.all(imagePromises);
    const pdf = new jsPDF();
    let yOffset = 10; // Initial y offset
  
    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = function () {
        const aspectRatio = img.width / img.height;
        const pageWidth = pdf.internal.pageSize.getWidth() - 20; // Adjusted for margins
        const imgWidth = pageWidth; // Image width covers full page width
        const imgHeight = imgWidth / aspectRatio;
  
        if (yOffset + imgHeight > pdf.internal.pageSize.getHeight() - 10) {
          pdf.addPage();
          yOffset = 10;
        }
  
        pdf.addImage(url, "PNG", 10, yOffset, imgWidth, imgHeight); // Adjust x, y, width, and height as needed
        yOffset += imgHeight + 10; // Adjusted for spacing between images
  
        // Save the PDF once all images have been added
        if (index === imageUrls.length - 1) {
          pdf.save("merged_images.pdf");
        }
      };
    });
  };
  


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={questionUrls[0]} alt="enlarged question" style={{ width: "100vw" }} />
        </Box>
      </Modal>
      <button variant="contained" onClick={downloadImagesAsPdf} disabled={selectedRows.length === 0} style={{backgroundColor:"rgba(57, 57, 162, 0.56)", color:"white", padding:"1rem", borderRadius:"0.5rem", cursor:'pointer'}}>
          Download Selected Images as PDF
        </button>
      <div className="overflow-x-auto" style={{ width: "100vw" }}>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Question</th>
              <th>QuestionType</th>
              <th>Question Level</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            {props.questions.map((question) => (
              <tr key={question.id} className={selectedRows.includes(question.id) ? "selected-row hover" : "hover"} onClick={() => handleOpen(question.questionUrl)}>
                <td>
                  <input type="checkbox" checked={selectedRows.includes(question.id)} onChange={() => toggleRowSelection(question.id)} />
                </td>
                <td id={`question-${question.id}`} style={{ margin: "0" }}>
                  <img src={question.questionUrl} alt="question url" style={{ maxWidth: "40rem", margin: "0", padding: "0" }}  onClick={() => handleOpen(question.questionUrl)}/>
                </td>
                <td>{question.questionType}</td>
                <td>{question.questionLevel}</td>
                <td>{question.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuestionCard;
