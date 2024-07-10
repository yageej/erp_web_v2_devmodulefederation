import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskList from "../../remote/src/components/TaskList";
import Button from "../../remote/src/components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is Host app</h1>
      THis is the remote components from remote App
      <TaskList />
      <Button />
    </>
  );
}

export default App;
