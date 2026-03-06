import { Task } from "@/types/Task";

const STORAGE_KEY = "tasks";

/**
 * Retrieves tasks from localStorage.
 * Returns empty array if nothing is stored.
 */
export function getTasks(): Task[] {
  if (typeof window === "undefined") return [];

  const storedTasks = localStorage.getItem(STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
}

/**
 * Stores the tasks in localStorage.
 *
 * @param tasks - Array of tasks to store
 */
export function saveTasks(tasks: Task[]): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
