import type { ReactElement } from "react";
import type { Task as TaskType } from "../types/task";

interface TaskProps {
  task: TaskType;
  onUpdate: (task: TaskType, updatedTask: TaskType) => void;
  onRemove: (task: TaskType) => void;
  onReorder: (draggedTask: TaskType, targetTask: TaskType) => void;
}

export const Task = ({ task, onUpdate, onRemove }: TaskProps): ReactElement => {
  const handleStatusToggle = () => {
    const updatedTask = { ...task, completed: !task.completed };
    onUpdate(task, updatedTask);
  };

  const handleDragStart = (event: React.DragEvent<HTMLElement>) => {};

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {};

  const classes: string[] = ["task"];
  if (task.completed) classes.push("completed");

  const formattedCreatedAt = new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(task.createdAt));

  return (
    <article
      className={classes.join(" ")}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      draggable
    >
      <span className="material-symbols-outlined status" onClick={() => handleStatusToggle()}>
        {task.completed ? "check_box" : "check_box_outline_blank"}
      </span>
      <div className="task-content-container">
        <div className="task-details">
          <p>
            {task.author} &bull; {formattedCreatedAt}
          </p>
        </div>
        <p>{task.content}</p>
      </div>

      <div className="task-actions">
        <span className="material-symbols-outlined edit">edit</span>
        <span className="material-symbols-outlined delete" onClick={() => onRemove(task)}>
          delete
        </span>
        <span className="material-symbols-outlined drag">drag_indicator</span>
      </div>
    </article>
  );
};
