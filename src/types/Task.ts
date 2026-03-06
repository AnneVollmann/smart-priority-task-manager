export type Priority = "Niedrig" | "Mittel" | "Hoch";

export interface Task {
  id: string;
  name: string;
  complexity: 1 | 2 | 3 | 4 | 5;
  priority: Priority;
  priorityScore: number;
  completed: boolean;
}

export interface TaskFormProps {
  onAddTask: (
    name: string,
    complexity: 1 | 2 | 3 | 4 | 5,
    priority: Priority,
  ) => void;
}
