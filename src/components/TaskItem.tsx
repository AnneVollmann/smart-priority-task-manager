"use client";
import { TaskItemProps } from "@/types/Task";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Checkbox,
    Button
} from "@mui/material";

export default function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
    return (
        <Card>
            <CardContent>
                <Typography>{task.name}</Typography>
                <Typography>Komplexität: {task.complexity}</Typography>
                <Typography>Priorität: {task.priority}</Typography>
                <Typography>Score: {task.priorityScore}</Typography>
            </CardContent>
            <CardActions>
                <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                <Button onClick={() => onDelete(task.id)}>Delete</Button>
            </CardActions>
        </Card >
    )
}