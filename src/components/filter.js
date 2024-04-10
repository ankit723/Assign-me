import React from "react";
import QuestionSet from "./QuestionSet";

const Filters = ({ qType, qLevel, qTopic }) => {
  const uniqueTopics = [
    ...new Set(QuestionSet.map((question) => question.topic)),
  ];
  console.log(uniqueTopics);

  const handleTypeClick = (option) => {
    qType(option);
  };

  const handleLevelClick = (option) => {
    qLevel(option);
  };

  const handleTopicClick = (option) => {
    qTopic(option);
  };
  return (
    <>
      <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-10">
        <li>
          <details>
            <summary>Question Type</summary>
            <ul style={{ zIndex: "50" }}>
              <li>
                <a onClick={() => handleTypeClick("Short")}>Short</a>
              </li>
              <li>
                <a onClick={() => handleTypeClick("Mid")}>Mid</a>
              </li>

              <li>
                <a onClick={() => handleTypeClick("Long")}>Long</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Question Level</summary>
            <ul style={{ zIndex: "50" }}>
              <li>
                <a onClick={() => handleLevelClick("Easy")}>Easy</a>
              </li>
              <li>
                <a onClick={() => handleLevelClick("Medium")}>Medium</a>
              </li>

              <li>
                <a onClick={() => handleLevelClick("Hard")}>Hard</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Question Topic</summary>
            <ul style={{ zIndex: "50", overflowY: "scroll", maxHeight: "20rem" }}>
              {uniqueTopics.map((question) => {
                return (
                  <li>
                    <a onClick={() => handleTopicClick(question)}>{question}</a>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
};

export default Filters;
