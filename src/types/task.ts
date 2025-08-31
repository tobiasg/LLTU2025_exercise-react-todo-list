export interface Task {
  id: string;
  author: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  priority?: "low" | "medium" | "high";
}
