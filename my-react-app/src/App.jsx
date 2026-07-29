import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // page load
    getTasks();
  }, []);

  const getTasks = () => {
    const tasksData = [
      {
        id:1,
        name: "Task 1",
        description: "Task 1 description",
      },
      {
        id:2,
        name:"task 2",
        description:"task 2 description",
      },
      {
        id:3,
        name:"task 3",
        description:"task 3 description",
      }

    ];

    setTasks(tasksData);
  };

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        name: "New Task",
        description: "This is a new task",
      },
    ]);
  };
  const deletetask=(id)=>{
    const newtask=tasks.filter((task)=>task.id!==id);
    setTasks(newtask);
  };

  return (
    <div className="container mt-5">
      <button onClick={() => addTask()}>Add Task</button>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              {task.name} - {task.description}
              <button onClick={()=>deletetask(task.id)} >Delete</button>
            </li>
          );
        
        })}
      </ul>
    </div>
  );
}
export default App;
