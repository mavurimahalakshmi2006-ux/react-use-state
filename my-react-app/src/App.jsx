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