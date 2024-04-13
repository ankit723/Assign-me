import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import QuestionCard from "./questionCard";
import QuestionSet from "./QuestionSet";
import Filters from "./filter";


const Random = () => {
    const [qType, setQType] = useState('');
    const [qLevel, setQLevel] = useState('');
    const [qTopic, setQTopic] = useState('');
    const [filteredQSet, setFilteredQSet] = useState([]);
    const [noOfRandom, setNoOfRandom]=useState(10)

    function getRandomElements(arr, numElements) {
        const newArr = arr.slice();
        const randomElements = [];
        
        for (let i = 0; i < numElements; i++) {
            const randomIndex = Math.floor(Math.random() * newArr.length);
            randomElements.push(newArr.splice(randomIndex, 1)[0]);
        }
        
        return randomElements;
    }
    const randomQuestions=getRandomElements(QuestionSet, noOfRandom)

    useEffect(() => {
        const filterFunction = (question) => {
            return (
                (qTopic === '' || question.topic === qTopic) &&
                (qType === '' || question.questionType === qType) &&
                (qLevel === '' || question.questionLevel === qLevel)
            );
        };
        const filteredQuestions = randomQuestions.filter(filterFunction);
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


export default Random;