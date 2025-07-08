import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div
      className="text-center flex justify-center items-center"
      style={{ height: `calc(100vh - 165px)` }}
    >
      <div>
        <h3 className="fw-light">No Task to display, Create new Tasks</h3>
        <button className="bg-blue-600 p-2 mt-4">
          <Link to="/new-task" className="text-decoration-none text-white">
            + Create New Task
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Empty;
