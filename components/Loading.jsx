import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-30">
      <CircleLoader color="#974FD0" size={100} />
    </div>
  );
};

export default Loading;
