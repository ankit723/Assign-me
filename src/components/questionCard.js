import React from "react";

const QuestionCard = (props) => {
    return (
        <>
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
                                <tr className="hover">
                                    <th>{question.id}</th>
                                    <th>
                                        {/* <iframe src={question.questionUrl} width="640" height="480" allow="autoplay"></iframe> */}
                                        <img src="https://drive.google.com/uc?export=view&id=1nFfKHmyXd8dzNIQ9HQTVSIeQn-zqmpwn" alt="question url" />
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