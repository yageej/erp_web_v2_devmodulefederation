import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>This is Remote App Component</div>

      <hr />

      <TaskList />

      <div>
        This is a button component
        <Button />
      </div>
    </>
  );
}

export default App;
