import React from "react";
import Data from "../../Data/Data";

const Services = () => {
  return (
    <div className=" w-50 m-auto mt-4 fs-4">
      {Data.map((data, index) => {
        return(
          <p key={index}>{data.services}</p>
        )
      })}
    </div>
  );
};

export default Services;
