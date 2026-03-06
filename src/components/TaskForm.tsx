"use client";
import { Priority, TaskFormProps } from "@/types/Task";
import { useState } from "react";
import {
    Box,
    TextField,
    MenuItem,
    Button,
    Paper,
    Stack,
} from "@mui/material";

export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [name, setName] = useState("");
    const [complexity, setComplexity] = useState<1 | 2 | 3 | 4 | 5>(1);
    const [priority, setPriority] = useState<Priority>("Mittel");

    function handleSubmit() {
        if (!name.trim()) return;
        onAddTask(name, complexity, priority);
        setName("");
        setComplexity(1);
        setPriority("Mittel");
    }

    return (
        <Paper elevation={3} sx={{ p: 3 }}>
            <Stack spacing={2}>
                <TextField
                    label="Name der Aufgabe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    select
                    label="Komplexität"
                    value={complexity}
                    onChange={(e) =>
                        setComplexity(Number(e.target.value) as 1 | 2 | 3 | 4 | 5)
                    }
                    fullWidth
                >
                    {[1, 2, 3, 4, 5].map((level) => (
                        <MenuItem key={level} value={level}>
                            {level}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Priorität"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    fullWidth
                >
                    {["Niedrig", "Mittel", "Hoch"].map((p) => (
                        <MenuItem key={p} value={p}>
                            {p}
                        </MenuItem>
                    ))}
                </TextField>
                <Box>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={!name.trim()}
                    >
                        Task erstellen
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );
}