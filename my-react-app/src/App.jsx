
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editTaskName, setEditTaskName] = useState();

  useEffect(() => {}, []);

  const addTask = () => {
    setTasks([
      ...tasks, // Existing tasks

      // New task
      {
        id: tasks.length + 1,
        name: taskName,
      },
    ]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const onTaskNameChange = (e) => {
    setTaskName(e.target.value); // setting task name on type
  };

  const editTask = (id) => {
    const findTask = tasks.find((task) => task.id === id); // {id: 3, name: "Task 3"}
    setEditTaskName(findTask); // setting editTaskName {id: 3, name: "Task 3"}
  };

  const updateTask = () => {
    const updatedTasks = tasks.filter((task) => {
      if (task.id === editTaskName.id) {
        task.name = taskName; // replacing with the updated name
      }
      return task;
    });
    setTasks(updatedTasks); // updating tasks
  };

  return (
    <div className="container mt-5">
      <input
        type="text"
        placeholder="Type here"
        onChange={() => onTaskNameChange(event)}
      />
      {editTaskName?.id ? (
        <button onClick={updateTask}>Update Task</button>
      ) : (
        <button onClick={addTask}>Add Task</button>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;