import { SetStateAction, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Task One", "Task twoo"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatetTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatetTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatetTasks = [...tasks];
      const temp = updatetTasks[index];
      updatetTasks[index] = updatetTasks[index - 1];
      updatetTasks[index - 1] = temp;
      console.log(updatetTasks);
      setTasks(updatetTasks);
    }
  }

  // function moveTaskDown(index: number) {
  //   if (index < tasks.length - 1) {
  //     const updatetTasks = [...tasks];
  //     const temp = updatetTasks[index];
  //     updatetTasks[index] = updatetTasks[index + 1];
  //     updatetTasks[index + 1] = temp;
  //     console.log(updatetTasks);
  //     setTasks(updatetTasks);
  //   }
  // }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskUp(index + 1)}
            >
              DOWN
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
