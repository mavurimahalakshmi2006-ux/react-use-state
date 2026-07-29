import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    const tasksData = [
      {
        id: 1,
        name: "Task 1",
        description: "Task 1 description",
      },
      {
        id: 2,
        name: "Task 2",
        description: "Task 2 description",
      },
      {
        id: 3,
        name: "Task 3",
        description: "Task 3 description",
      },
    ];

    setTasks(tasksData);
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: "New Tasks",
        description: "This is a new task",
      },
    ]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - {task.description}
            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;