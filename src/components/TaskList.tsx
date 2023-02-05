import React from "react";
import { taskInterface } from "../App";
import "./TaskList.scss";

interface props {
  onDelete: (id: number) => void;
  task: taskInterface[];
}

const TaskList = (props: props) => {
  return (
    <ul className="task-list">
      {props.task.map((item) => (
        <li key={item.id}>
          {item.newTask}
          <button
            onClick={() => {
              props.onDelete(item.id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
