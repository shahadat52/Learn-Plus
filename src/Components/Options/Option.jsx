import React from "react";
import "./Option.css";
import Swal from "sweetalert2";
import { MdQuestionAnswer } from "react-icons/md";

const Option = ({ option, correctAnswer }) => {
  const handleCorrectAns = (ans) => {
    if (ans === correctAnswer) {
      Swal.fire("Good job!", "Your Answer Correct!", "success");
      console.log(correctAnswer);
    } else {
      console.log(correctAnswer);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Answer!",
      });
    }
  };

  const showCorrectAnswer = () => {
    Swal.fire(correctAnswer);
  };

  return (
    <div className="text-justify">
      <p onClick={showCorrectAnswer} className="absolute right-2 top-2">
        <MdQuestionAnswer></MdQuestionAnswer>
      </p>
      <p
        onClick={() => handleCorrectAns(option)}
        className="option text-center py-4"
      >
        <span className=" py-4 px-10  rounded-3xl">{option}</span>
      </p>
    </div>
  );
};

export default Option;
