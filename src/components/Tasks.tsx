import { type ReactElement, type ReactNode } from "react";
import type { Task as TaskType } from "../types/task";
import { Task } from "./Task";
import { useList } from "../hooks/useList";
import { TaskProgress } from "./TaskProgress";
import { TaskForm } from "./TaskForm";

interface TasksProps {}

export const Tasks = ({}: TasksProps): ReactElement => {
  const tasks = useList<TaskType>("tasks", []);

  const handleReorder = (draggedTask: TaskType, targetTask: TaskType) => {};

  const renderTasks = (): ReactNode => {
    return (
      <>
        <TaskProgress
          numberOfTasks={tasks.list.length}
          numberOfCompletedTasks={tasks.list.filter((task) => task.completed).length}
        />
        <TaskForm onAddTask={tasks.add} />
        <section id="tasks">
          {tasks.list.length > 0 ? (
            tasks.list.map((task) => (
              <Task
                task={task}
                onUpdate={tasks.update}
                onRemove={tasks.remove}
                onReorder={handleReorder}
                key={task.id}
              />
            ))
          ) : (
            <p className="empty-message">No tasks</p>
          )}
        </section>
      </>
    );
  };

  return <>{renderTasks()}</>;
};
