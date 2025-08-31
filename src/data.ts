import type { Task } from "./types/task";
import { v4 as uuidv4 } from "uuid";

export const getTasks = (): Task[] => {
  return [
    {
      id: uuidv4(),
      author: "tobias",
      content: "Task 1",
      completed: false,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
      priority: "high",
    },
    {
      id: uuidv4(),
      author: "tobias",
      content: "Task 2",
      completed: false,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
      priority: "medium",
    },
    {
      id: uuidv4(),
      author: "tobias",
      content: "Task 3",
      completed: false,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
      priority: "low",
    },
    {
      id: uuidv4(),
      author: "tobias",
      content: "Task 4",
      completed: false,
      createdAt: new Date("2025-08-28"),
      updatedAt: new Date("2025-08-28"),
    },
    {
      id: uuidv4(),
      author: "tobias",
      content: "Task 5",
      completed: false,
      createdAt: new Date("2025-08-29"),
      updatedAt: new Date("2025-08-29"),
    },
  ];
};
