import type { ReactElement, ReactNode } from "react";
import type { Task as TaskType } from "../types/task";
import { Task } from "./Task";

interface TasksProps {
  tasks: TaskType[];
}

export const Tasks = ({ tasks }: TasksProps): ReactElement => {
  const renderTasks = (): ReactNode => {
    return tasks.map((task) => <Task task={task} key={task.id} />);
  };
  return <section id="tasks">{renderTasks()}</section>;
};
