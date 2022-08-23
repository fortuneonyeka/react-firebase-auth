import React from "react";
import Data from "../../Data/Data";

const About = () => {
  return (
    <div className=" w-50 m-auto mt-4 fs-4">
     {Data.map((data,index) => {
      return(
        <p key={index}>{data.about}</p>
      )
     })}
    </div>
  );
};

export default About;
