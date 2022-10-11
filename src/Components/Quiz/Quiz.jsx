import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import "./Quiz.css";

const Quiz = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  const { logo, questions, name } = data;

  return (
    <div className=" quiz text-center pb-20">
      <img src={logo} alt="" className=" mx-auto rounded-lg  " />
      <h1 className="lg:text-7xl text-5xl md:text-5xl font-bold option-name-container  ">
        <span className="option-name">{name}</span>
      </h1>

      <div className=" question-container">
        {questions.map((question) => (
          <Questions key={question.id} questions={question}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
