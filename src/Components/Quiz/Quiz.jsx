import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";
import "./Quiz.css";

const Quiz = () => {
  const quiz = useLoaderData();
  const { data } = quiz;
  const { logo, questions, name } = data;
  console.log(data);
  // console.log(questions);

  // const myStyle = {
  //   backgroundImage: logo,
  //   height: "100%",
  //   // marginTop: "-70px",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // style={myStyle}
  // };

  return (
    <div className=" quiz text-center pb-20 relative  ">
      <h1 className="text-7xl font-bold option-name-container  ">
        <span className="option-name">{name}</span>
      </h1>
      <img src={logo} alt="" className=" absolute top-4 rounded-lg right-80 " />
      <div className=" question-container">
        {questions.map((question) => (
          <Questions key={question.id} questions={question}></Questions>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
