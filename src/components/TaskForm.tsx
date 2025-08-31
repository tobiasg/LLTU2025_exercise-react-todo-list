import { useState, type FormEvent, type ReactElement } from "react";
import type { Task as TaskType } from "../types/task";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
  onAddTask: (task: TaskType) => void;
}

export const TaskForm = ({ onAddTask }: TaskFormProps): ReactElement => {
  const [content, setContent] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (content.length === 0) return;

    const newTask: TaskType = {
      id: uuidv4(),
      author: "",
      content: content,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      priority: "low",
    };

    onAddTask(newTask);
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="new-task-form">
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Add a task"
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
