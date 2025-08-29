import { type ReactElement, type ReactNode } from "react";
import type { Task as TaskType } from "../types/task";
import { Task } from "./Task";
import { useList } from "../hooks/useList";

interface TasksProps {}

export const Tasks = ({}: TasksProps): ReactElement => {
  const tasks = useList<TaskType>("tasks", []);

  const completed = tasks.list.filter((task) => task.completed).length;

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
            <Task task={task} onRemove={tasks.remove} key={task.id} />
          ))}
        </section>
      </>
    );
  };

  return <>{renderTasks()}</>;
};
