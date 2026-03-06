import { Task } from "@/types/Task";

const STORAGE_KEY = "tasks";

export function getTasks(): Task[] {
  if (typeof window === "undefined") return [];

  const storedTasks = localStorage.getItem(STORAGE_KEY);
  return storedTasks? JSON.parse(storedTasks) : [];
}

export function saveTasks(tasks: Task[]): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}