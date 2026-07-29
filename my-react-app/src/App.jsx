<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const increment = () => {
    if (isLiked) {
      setCount(count - 1);
      setIsLiked(false);
    } else {
      setCount(count + 1);
      setIsLiked(true);
    }
  };

  return (
    
      <div className="container mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h3>React like counter</h3>
          <p>Beginner task - use state + onclick</p>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={increment}
          >
            {isLiked ? "❤️ Liked" : "🤍 Like"}
          </button>

          <p> {count}:likes</p>
        </div>
      </div>
    </div>
  );
}
export default App;
>>>>>>> 8822c84e879decc178b227474d8424ef7588c84f
