import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import QuestionCard from "./questionCard";
import QuestionSet from "./QuestionSet";
import Filters from "./filter";


const Home = () => {
    const [qType, setQType] = useState('');
    const [qLevel, setQLevel] = useState('');
    const [qTopic, setQTopic] = useState('');
    const [filteredQSet, setFilteredQSet] = useState([]);

    useEffect(() => {
        const filterFunction = (question) => {
            return (
                (qTopic === '' || question.topic === qTopic) &&
                (qType === '' || question.questionType === qType) &&
                (qLevel === '' || question.questionLevel === qLevel)
            );
        };
        const filteredQuestions = QuestionSet.filter(filterFunction);
        setFilteredQSet(filteredQuestions);
    }, [qType, qLevel, qTopic]);
    

    return (
        <>
            <Navbar />
            <div className="" style={{ cursor: "pointer", margin: "4rem 2rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100vw" }}>
                <Filters qType={setQType} qLevel={setQLevel} qTopic={setQTopic} />
                <QuestionCard questions={filteredQSet} />
            </div>
        </>
    )
}


export default Home;