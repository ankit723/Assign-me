import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import QuestionCard from "./questionCard";
import QuestionSet from "./QuestionSet";
import Filters from "./filter";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Random = () => {
    const [qType, setQType] = useState('');
    const [qLevel, setQLevel] = useState('');
    const [qTopic, setQTopic] = useState('');
    const [filteredQSet, setFilteredQSet] = useState([]);
    const [customInput, setCustomInput] = useState("");
    const [noOfRandom, setNoOfRandom] = useState(10);

    function getRandomElements(arr, numElements) {
        const newArr = arr.slice();
        const randomElements = [];
        
        for (let i = 0; i < numElements; i++) {
            const randomIndex = Math.floor(Math.random() * newArr.length);
            randomElements.push(newArr.splice(randomIndex, 1)[0]);
        }
        
        return randomElements;
    }
    
    useEffect(() => {
        const randomQuestions = getRandomElements(QuestionSet, noOfRandom)
        const filterFunction = (question) => {
            return (
                (qTopic === '' || question.topic === qTopic) &&
                (qType === '' || question.questionType === qType) &&
                (qLevel === '' || question.questionLevel === qLevel)
            );
        };
        const filteredQuestions = randomQuestions.filter(filterFunction);
        setFilteredQSet(filteredQuestions);
    }, [qType, qLevel, qTopic, noOfRandom]);

    const handleNoOfQuestion = (number) => {
        setNoOfRandom(number);
    }

    const handleCustomInput = (e) => {
        setNoOfRandom(parseInt(e.target.value) || 0);
        setCustomInput(e.target.value);
    }

    return (
        <>
            <Navbar />
            <div className="" style={{ cursor: "pointer", margin: "4rem 2rem", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100vw" }}>
                <Filters qType={setQType} qLevel={setQLevel} qTopic={setQTopic} />

                <FormControl style={{ color: "white" }}>
                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ color: "white" }}>Random Questions</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="10" control={<Radio />} label="10" onClick={() => handleNoOfQuestion(10)} />
                        <FormControlLabel value="20" control={<Radio />} label="20" onClick={() => handleNoOfQuestion(20)} />
                        <FormControlLabel value="30" control={<Radio />} label="30" onClick={() => handleNoOfQuestion(30)} />
                        <FormControlLabel
                            value="custom"
                            control={<Radio />}
                            label={<input type="text" value={customInput} style={{ backgroundColor: "white", borderRadius: "2rem", color: "black", padding: "0.2rem" }} onChange={handleCustomInput} />}
                        />
                    </RadioGroup>
                </FormControl>
                
                <QuestionCard questions={filteredQSet} />
            </div>
        </>
    )
}

export default Random;
