import React, { useContext } from "react";
import { TopicContext } from "../Main";
import Topics from "../Topics/Topics";

const Home = () => {
  const topics = useContext(TopicContext);
  const { data } = topics;
  console.log(data);
  return (
    <div className="grid h-screen place-items-center">
      {data.map((topic) => (
        <Topics key={topic.id} topic={topic}></Topics>
      ))}
    </div>
  );
};

export default Home;
