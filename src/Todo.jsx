/*import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;*/
/*
export default function Todo(){
  function Todo(name){
    alert(`you are ${name}`);
  }
  return <>
  <h1>Event Handling</h1>
  <button onClick={()=>Todo("tushar")}>Click me</button>
  </>
}*/
export default function Todo(){
  function Todo(name){
    alert(`you are ${name}`);
  }
  return <>
  <h1>Event Handling</h1>
  <button onClick={()=>Todo("tushar")}>Click me</button>
  </>
}
