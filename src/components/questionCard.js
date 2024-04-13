import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "90%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex", 
    justifyContent:"center",
    alignItems:"center"
  };
  

const QuestionCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (imageUrl) => {
        setQuestionUrl(imageUrl)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const [questionUrl, setQuestionUrl]=useState("")
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={questionUrl} alt="enlarged question" style={{width:"100vw"}}/>
                </Box>
            </Modal>
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
                        {props.questions.map((question) => {
                            return (
                                <tr className="hover" onClick={()=>handleOpen(question.questionUrl)}>
                                    <th>{question.id}</th>
                                    <th style={{margin:"0"}}>
                                        <img src={question.questionUrl} alt="question url" style={{maxWidth:"40rem", margin:"0", padding:"0"}}/>
                                    </th>
                                    <td>{question.questionType}</td>
                                    <td>{question.questionLevel}</td>
                                    <td>{question.topic}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </>
    );
};


export default QuestionCard;