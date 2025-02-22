import React, { FC } from 'react';
import { TaskInterface } from '../../types/taskInterface';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

interface TaskProps {
    task: TaskInterface;
}

const Task: FC<TaskProps> = ({ task }) => {


    return <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                <>{task.startDate.toLocaleDateString()} - {task.exparationDate.toLocaleDateString()}</>
            </Typography>
            <Typography variant="h5" component="div">
                {task.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>priority: {task.priority}</Typography>
            <Typography variant="body2">
                {task.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Action</Button>
        </CardActions>
    </Card>;
};

export default Task;