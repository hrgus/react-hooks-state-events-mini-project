import React from "react";

function Task({ task, category, filteredTasks }) {
  
  
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button onClick={() => filteredTasks(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
