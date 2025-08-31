import { type ReactElement, type ReactNode } from "react";
import type { Task as TaskType } from "../types/task";
import { Task } from "./Task";
import { useList } from "../hooks/useList";
import { getTasks } from "../data";

interface TasksProps {}

export const Tasks = ({}: TasksProps): ReactElement => {
  const tasks = useList<TaskType>("tasks", getTasks());

  const completed = tasks.list.filter((task) => task.completed).length;

  const handleReorder = (draggedTask: TaskType, targetTask: TaskType) => {
    const draggedIndex = tasks.list.findIndex((task) => task.id === draggedTask.id);
    const targetIndex = tasks.list.findIndex((task) => task.id === targetTask.id);

    if (draggedIndex !== -1 && targetIndex !== -1) {
    }
  };

  const renderTasks = (): ReactNode => {
    if (tasks.list.length === 0) {
      return <section className="no-tasks">No tasks</section>;
    }

    return (
      <>
        <section className="list-info">
          <span className="stats">
            {completed} / {tasks.list.length}
          </span>{" "}
          &bull; <span className="name">List name</span>
        </section>
        <section id="tasks">
          {tasks.list.map((task) => (
            <Task
              task={task}
              onUpdate={tasks.update}
              onRemove={tasks.remove}
              onReorder={handleReorder}
              key={task.id}
            />
          ))}
        </section>
      </>
    );
  };

  return <>{renderTasks()}</>;
};
