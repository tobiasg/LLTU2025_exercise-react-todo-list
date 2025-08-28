import type { Task } from "./types/task";
import { v4 as uuidv4 } from "uuid";

export const getTasks = async (): Promise<Task[]> => {
  const tasks: Task[] = [
    {
      id: uuidv4(),
      text: "Task 1",
      completed: false,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
      priority: "high",
    },
    {
      id: uuidv4(),
      text: "Task 2",
      completed: false,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
      priority: "medium",
    },
    {
      id: uuidv4(),
      text: "Task 3",
      completed: true,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
      priority: "low",
    },
    {
      id: uuidv4(),
      text: "Task 4",
      completed: true,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
    },
  ];

  return tasks;
};
