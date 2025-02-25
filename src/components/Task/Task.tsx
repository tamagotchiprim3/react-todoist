import React, { FC } from 'react';
import { TaskInterface } from '../../types/task-interface';
import { Card, CardContent, Typography } from '@mui/material';
import './Task.scss';

interface TaskProps {
    task: TaskInterface;
}

const Task: FC<TaskProps> = ({ task }) => {


    return <Card className="card" sx={{ 'background': '#4dabf5' }}>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                <>{task.creationDate.toLocaleDateString()} - {task.expirationDate.toLocaleDateString()}</>
            </Typography>
            <Typography variant="h5" component="div">
                {task.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>priority: {task.priority}</Typography>
            <Typography variant="body2">
                {task.description}
            </Typography>
        </CardContent>
    </Card>;
};

export default Task;