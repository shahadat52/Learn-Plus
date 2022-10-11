import React from "react";
import "./Option.css";

const Option = ({ option, correctAnswer }) => {
  const handleCorrectAns = (ans) => {
    if (ans === correctAnswer) {
      alert("Right");
      return;
    } else {
    }
  };
  return (
    <div>
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
