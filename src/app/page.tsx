"use client";
import { useState, useEffect, useMemo } from "react";
import { Task } from "@/types/Task";
import { getTasks, saveTasks } from "@/utils/storage";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { calculatePriorityScore } from "@/utils/priorityScoreCalculator";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = getTasks()
    setTasks(storedTasks);
  }, []);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => b.priorityScore - a.priorityScore);
  }, [tasks]);

  function handleAddTask(
    name: string,
    complexity: 1 | 2 | 3 | 4 | 5,
    priority: "Niedrig" | "Mittel" | "Hoch"
  ) {
    const priorityScore = calculatePriorityScore(complexity, priority);
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      complexity,
      priority,
      priorityScore,
      completed: false,
    }
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  function handleToggleComplete(id: string) {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Smart Priority Task Manager</h1>
      <TaskForm onAddTask={handleAddTask}/>
      <TaskList/>
    </div>
  );
}
