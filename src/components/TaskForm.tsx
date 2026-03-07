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
    Select,
    FormControl,
    InputLabel,
    Typography,
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
                <Typography variant="h6">
                    Füge eine neue Aufgabe hinzu:
                </Typography>
                <TextField
                    label="Name der Aufgabe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel id="complexity-label">Komplexität</InputLabel>

                    <Select
                        labelId="complexity-label"
                        label="Komplexität"
                        value={complexity}
                        onChange={(e) =>
                            setComplexity(Number(e.target.value) as 1 | 2 | 3 | 4 | 5)
                        }
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((level) => (
                            <MenuItem key={level} value={level}>
                                {level}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="priority-label">Priorität</InputLabel>

                    <Select
                        labelId="priority-label"
                        label="Priorität"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as Priority)}
                        MenuProps={{
                            disableScrollLock: true
                        }}
                    >
                        {["Niedrig", "Mittel", "Hoch"].map((p) => (
                            <MenuItem key={p} value={p}>
                                {p}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                        disabled={!name.trim()}
                    >
                        Aufgabe erstellen
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );
}