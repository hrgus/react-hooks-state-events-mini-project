import React, { useState } from "react";
// import { v4 as uuid } from "uuid";
import Task from "./Task";

function TaskList({ tasks, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  // const [task, setTask] = useState(TASKS);


  function handlecategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const tasksToDisplay = tasks.filter((task) => {
    if(selectedCategory === "ALL") return true;

    return task.category === selectedCategory
  })

  const filteredTasks = tasksToDisplay.filter((task) => {
    return task.text.includes(tasks);
  })

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task 
          key={index}
          task={task.text}
          category={task.category}
          deleteTask={filteredTasks}
        />
      ))}

    </div>
  );
}

export default TaskList;