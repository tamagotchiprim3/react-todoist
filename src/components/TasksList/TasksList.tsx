import React, { FC, useState } from 'react';
import { TaskInterface, TaskPriority } from '../../types/task-interface';
import Task from '../Task/Task';
import './TasksList.scss';
import { Card } from '@mui/material';
import TaskForm from '../TaskForm/TaskForm';

interface TasksListProps {
}

const TasksList: FC<TasksListProps> = () => {
    const [openCreationForm, setOpenCreationForm] = useState<boolean>(false);
    const [tasks, setTasks] = useState<TaskInterface[]>([
        {
            id: '1',
            title: 'Fix login bug',
            description: 'Resolve the login issue in production',
            creationDate: new Date('2025-02-20T10:00:00'),
            expirationDate: new Date('2025-02-25T18:00:00'),
            priority: TaskPriority.High,
        },
        {
            id: '2',
            title: 'Write unit tests',
            description: 'Cover 80% of the codebase with tests',
            creationDate: new Date('2025-02-21T09:30:00'),
            expirationDate: new Date('2025-02-26T17:00:00'),
            priority: TaskPriority.Medium,
        },
        {
            id: '3',
            title: 'Update documentation',
            description: 'Add API documentation for the new features',
            creationDate: new Date('2025-02-22T12:00:00'),
            expirationDate: new Date('2025-02-27T15:00:00'),
            priority: TaskPriority.Low,
        },
    ]);


    const handleCreationFormToggle = () => {
        setOpenCreationForm(!openCreationForm);
    };

    const handleTaskSubmit = (task: Omit<TaskInterface, 'id' | 'creationDate'>) => {
        const newTask: TaskInterface = {
            ...task,
            id: crypto.randomUUID(), // Генерируем уникальный ID
            creationDate: new Date(), // Текущая дата
        };
        setTasks((prevTasks) => [...prevTasks, newTask]); // Добавляем задачу в состояние
    };


    return (
        <div className="tasks-wrapper">
            {tasks.map((task: TaskInterface) => <Task key={task.id} task={task}></Task>)}
            <Card className="creation-card" sx={{ 'background': '#2196f3' }} onClick={handleCreationFormToggle}>
                Create
            </Card>
            {openCreationForm && <TaskForm open={openCreationForm} onClose={handleCreationFormToggle}
                                           onSubmit={handleTaskSubmit}></TaskForm>}
        </div>
    );
};

export default TasksList;