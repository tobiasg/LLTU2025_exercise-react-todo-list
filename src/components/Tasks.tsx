import { type ReactElement, type ReactNode } from "react";
import type { Task as TaskType } from "../types/task";
import { Task } from "./Task";
import { useList } from "../hooks/useList";
import { getTasks } from "../data";
import { TaskProgress } from "./TaskProgress";
import { TaskForm } from "./TaskForm";

interface TasksProps {}

export const Tasks = ({}: TasksProps): ReactElement => {
  const tasks = useList<TaskType>("tasks", getTasks());

  const handleReorder = (draggedTask: TaskType, targetTask: TaskType) => {
    const draggedIndex = tasks.list.findIndex((task) => task.id === draggedTask.id);
    const targetIndex = tasks.list.findIndex((task) => task.id === targetTask.id);

    if (draggedIndex !== -1 && targetIndex !== -1) {
    }
  };

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
