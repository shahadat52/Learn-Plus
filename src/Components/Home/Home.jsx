import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import { TopicContext } from "../Main";
import Topics from "../Topics/Topics";
import "./Home.css";

const Home = () => {
  const topics = useContext(TopicContext);
  const { data } = topics;
  return (
    <div>
      <Banner />
      <div className="topic-container">
        {data.map((topic) => (
          <Topics key={topic.id} topic={topic}></Topics>
        ))}
      </div>
    </div>
  );
};

export default Home;
