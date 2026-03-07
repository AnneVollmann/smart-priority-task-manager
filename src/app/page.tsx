"use client";
import { useState, useEffect, useMemo } from "react";
import { Task } from "@/types/Task";
import { getTasks, saveTasks } from "@/utils/storage";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { calculatePriorityScore } from "@/utils/priorityScoreCalculator";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";

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
    <Box sx={{minHeight: "100vh", py: 6, backgroundColor: "#f5f5f53e"}}>
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
