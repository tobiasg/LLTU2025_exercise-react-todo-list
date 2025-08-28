import type { ReactElement } from "react";
import type { Task as TaskType } from "../types/task";

interface TaskProps {
  task: TaskType;
}

export const Task = ({ task }: TaskProps): ReactElement => {
  return <article>{task.text}</article>;
};
