export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  priority?: "low" | "medium" | "high";
}
