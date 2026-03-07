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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
    const highPriority = task.priorityScore > 10;

    return (
        <Card
            sx={{
                opacity: task.completed ? 0.5 : 1,
                border: highPriority ? "4px solid #f44336" : "4px solid #fff"
            }}
        >
            <CardContent>
                <Typography sx={{fontWeight: "bold", fontSize: 20}}>{task.name}</Typography>
                <Typography>Komplexität: {task.complexity}</Typography>
                <Typography>Priorität: {task.priority}</Typography>
                <Typography data-testid={`task-score-${task.id}`}>Score: {task.priorityScore}</Typography>
            </CardContent>
            <CardActions sx={{gap: "8px"}}>
                <Checkbox checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                <Button onClick={() => onDelete(task.id)} sx={{aspectRatio:1, minWidth: "unset", borderRadius:"50%"}}>
                    <DeleteForeverIcon sx={{aspectRatio:1}}/>
                </Button>
            </CardActions>
        </Card >
    )
}