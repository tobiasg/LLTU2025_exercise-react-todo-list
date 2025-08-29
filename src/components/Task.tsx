import type { ReactElement } from "react";
import type { Task as TaskType } from "../types/task";

interface TaskProps {
  task: TaskType;
  onRemove: (task: TaskType) => void;
}

export const Task = ({ task, onRemove }: TaskProps): ReactElement => {
  return (
    <article className="task">
      {task.text}
      <div className="task-actions">
        <span
          className="material-symbols-outlined delete"
          onClick={() => onRemove(task)}
        >
          delete
        </span>
        <span className="material-symbols-outlined drag">drag_indicator</span>
      </div>
    </article>
  );
};
