import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import TaskList from "./components/TaskList";
import Card from "./components/UI/Card";
import "./App.css";

export interface taskInterface {
  newTask: string;
  id: number;
}
const App = () => {
  //state
  const [tasks, setTasks] = useState<taskInterface[]>([]);
  //add task
  const addTask = (task: taskInterface) => {
    setTasks((prevState) => {
      return [...prevState, { newTask: task.newTask, id: task.id }];
    });
  };
  //delete task
  const deleteTask = (id: number) => {
    setTasks((tasks) => {
      return tasks.filter((item) => item.id !== id);
    });
  };
  return (
    <Card>
      <AddTasks onAddTasks={addTask} />
      {tasks.length === 0 && <div className="warning">There is no task</div>}
      <TaskList task={tasks} onDelete={deleteTask} />
    </Card>
  );
};

export default App;
