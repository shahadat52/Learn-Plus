import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner grid h-fit place-items-center  text-white text-center ">
      <div className="overlap">
        <div className="text">
          <h1 className="text-7xl font-bold my-2 ">
            Learning Programming Online
          </h1>
          <br />
          <p className="text-slate-300 ">
            Web development is the work involved in developing a website for the
            Internet or an intranet. Web development can range from developing a
            simple single static page of plain text to complex web applications,
            electronic businesses, and social network services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
