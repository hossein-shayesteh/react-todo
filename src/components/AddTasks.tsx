import React, { useRef } from "react";
import "./AddTask.scss";

interface props {
  onAddTasks: (task: { newTask: string; id: number }) => void;
}
let initialId = 1;

const AddTasks = (props: props) => {
  //change the input value with ref
  const task = useRef<HTMLInputElement>(null);

  //submit the code
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.current!.value.trim().length > 0) {
      props.onAddTasks({ newTask: task.current!.value, id: initialId });
      initialId++;
      task.current!.value = "";
    }
  };

  // markup
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="task">Enter task please</label>
      <input type="text" id="task" ref={task} />
      <button>Submit</button>
    </form>
  );
};

export default AddTasks;
