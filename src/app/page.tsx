"use client";
import { useState, useEffect, useMemo } from "react";
import { Task } from "@/types/Task";
import { getTasks, saveTasks } from "@/utils/storage";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { calculatePriorityScore } from "@/utils/priorityScoreCalculator";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = getTasks()
    setTasks(storedTasks);
  }, []);

  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => b.priorityScore - a.priorityScore);
  }, [tasks]);

  /**
   * Adds a new task to the TaskList with calculated priority score.
   *
   * @param name - The name of the task
   * @param complexity - Task complexity (1-5)
   * @param priority - Task priority ("Niedrig" | "Mittel" | "Hoch")
   */
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

  /**
   * Deletes a task from the TaskList by its ID.
   *
   * @param id - The ID of the task to delete
   */
  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  /**
   * Toggles the completed status of a task by its ID.
   *
   * @param id - The ID of the task to toggle
   */
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
    <Box sx={{ minHeight: "100vh", py: 6, backgroundColor: "#f5f5f53e" }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Typography variant="h3" textAlign="center">
            Smart Priority Task Manager
          </Typography>
          <TaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={sortedTasks}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        </Stack>
      </Container>
    </Box>
  );
}
