import React from "react";
import Option from "../Options/Option";
import "./Questions.css";
import { MdOutlineQuestionAnswer, MdQuestionAnswer } from "react-icons/md";

const Questions = ({ questions }) => {
  const { correctAnswer, options, question } = questions;
  // console.log(correctAnswer);

  return (
    <div>
      <li className="question relative text-3xl mb-10 font-bold ">
        <span className="question-name">{question}</span>

        <div className="option-container  ">
          {options.map((option, index) => (
            <Option
              key={index}
              option={option}
              correctAnswer={correctAnswer}
              // handleCorrectAns={handleCorrectAns}
            ></Option>
          ))}
        </div>
      </li>
    </div>
  );
};

export default Questions;
