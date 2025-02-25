import React, { FC, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';
import { TaskInterface, TaskPriority } from '../../types/task-interface';

// Пропсы компонента
interface TaskFormProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (task: Omit<TaskInterface, 'id' | 'creationDate'>) => void; // id и creationDate генерируются на бэкенде или позже
}

const TaskForm: FC<TaskFormProps> = ({ open, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: TaskPriority.Low,
        expirationDate: new Date(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name as string]: value,
        }));
    };
    const handleSelectChange = (e: SelectChangeEvent<TaskPriority>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value as TaskPriority,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const task: Omit<TaskInterface, 'id' | 'creationDate'> = {
            title: formData.title,
            description: formData.description,
            priority: formData.priority,
            expirationDate: new Date(formData.expirationDate),
        };
        onSubmit(task);
        onClose();
        setFormData({
            title: '',
            description: '',
            priority: TaskPriority.Medium,
            expirationDate: new Date(),
        });
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            <DialogTitle>Task Creation</DialogTitle>
            <DialogContent>
                <TextField
                    required
                    id="title"
                    name="title"
                    label="Task Title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    variant="standard"
                />
                <TextField
                    required
                    id="description"
                    name="description"
                    label="Description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    variant="standard"
                    multiline
                    rows={3}
                />
                <FormControl>
                    <InputLabel id="priority-label">Priority</InputLabel>
                    <Select
                        labelId="priority-label"
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleSelectChange}
                        label="Priority"
                    >
                        <MenuItem value={TaskPriority.Low}>{TaskPriority.Low}</MenuItem>
                        <MenuItem value={TaskPriority.Medium}>{TaskPriority.Medium}</MenuItem>
                        <MenuItem value={TaskPriority.High}>{TaskPriority.High}</MenuItem>
                        <MenuItem value={TaskPriority.Urgent}>{TaskPriority.Urgent}</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required
                    id="expirationDate"
                    name="expirationDate"
                    label="Expiration Date"
                    type="datetime-local"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    fullWidth
                    margin="dense"
                    variant="standard"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit">Create Task</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskForm;