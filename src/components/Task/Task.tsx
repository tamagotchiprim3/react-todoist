import React, { FC, RefObject } from 'react';
import { TaskInterface } from '../../shared/types/task-interface';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';
import { checkExpiration } from '../../shared/utils/check-expiration';

interface TaskProps {
    task: TaskInterface;
    onDelete: (taskId: TaskInterface) => void;
    ref: RefObject<HTMLDivElement | null> | null;
}

const Task: FC<TaskProps> = ({ task, onDelete, ref }) => {
    return (
        <Card
            ref={ref}
            className="card"
            sx={{
                background: checkExpiration(task.expirationDate)
                    ? '#4dabf5'
                    : '#e57373',
            }}
        >
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{ color: 'text.secondary', fontSize: 14 }}
                >
                    <>
                        {task.creationDate.toLocaleDateString()} -{' '}
                        {task.expirationDate.toLocaleDateString()}
                    </>
                </Typography>
                <Typography variant="h5" component="div">
                    {task.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    priority: {task.priority}
                </Typography>
                <Typography variant="body2">{task.description}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => onDelete(task)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};
export default Task;