import { useState, type FormEvent, type ReactElement } from "react";
import type { Task as TaskType } from "../types/task";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
  onAddTask: (task: TaskType) => void;
}

export const TaskForm = ({ onAddTask }: TaskFormProps): ReactElement => {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (content.length === 0) return;

    const newTask: TaskType = {
      id: uuidv4(),
      author: author,
      content: content,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      priority: priority,
    };

    console.log(newTask);

    onAddTask(newTask);
    setContent("");
    setAuthor("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="new-task-form">
        <div className="task-content">
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Add a task ..."
            className="form-input content-input"
            required
          />
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="Enter your name ..."
            className="form-input author-input"
            required
          />
        </div>

        <div className="form-controls">
          <select
            value={priority}
            className="control-select"
            onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button type="submit" className="add-button">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};
