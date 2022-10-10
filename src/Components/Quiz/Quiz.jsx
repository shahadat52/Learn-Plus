import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quizDetails = useLoaderData();
  console.log(quizDetails);
  return (
    <div>
      <p>This is Quiz page</p>
    </div>
  );
};

export default Quiz;
