import { useEffect, useState } from "react";
import { getTasks } from "../api";
import type { Task } from "../types/task";
import { Tasks } from "./Tasks";

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <>
      <h1>Todo</h1>
      <Tasks tasks={tasks} />
    </>
  );
};

export default App;
