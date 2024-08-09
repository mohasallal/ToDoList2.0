import { useState, useEffect } from "react";
import "./List.css";

function ToDoList() {
  const SavedData = JSON.parse(localStorage.getItem("data"));

  const [tasks, setTasks] = useState(SavedData);
  const [newTask, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTask() {
    if (newTask.length !== 0) {
      setTasks((t) => [...t, newTask]);
      setNewTasks("");
    }
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasks));
  });

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  function checked(event) {
    if (event.target.classList.contains("checked")) {
      event.target.classList.remove("checked");
    } else {
      event.target.classList.add("checked");
    }
  }

  return (
    <div className="Card">
      <h1>To Do List</h1>

      <div className="inputField">
        <input
          type="text"
          placeholder="Enter Task :)"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="AddBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="Container">
        {tasks.map((task, index) => (
          <div key={index} className="line">
            <p className="Task Pointer" onClick={checked}>
              {task}
            </p>
            <button className="DeleteBtn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ToDoList;
