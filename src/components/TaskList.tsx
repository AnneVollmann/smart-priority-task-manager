"use client";
import { Stack } from "@mui/material";
import TaskItem from "./TaskItem";
import { TaskListProps } from "@/types/Task";

export default function TaskList({
    tasks,
    onDelete,
    onToggleComplete,
}: TaskListProps) {
    return (
        <Stack spacing={2}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </Stack>
    );
}