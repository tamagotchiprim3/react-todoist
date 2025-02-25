import React, { FC, useState } from 'react';
import { TaskInterface } from '../../types/task-interface';
import Task from '../Task/Task';
import './TasksList.scss';
import { Card } from '@mui/material';
import TaskForm from '../TaskForm/TaskForm';

interface TasksListProps {
    tasks: TaskInterface[];
    onTasksChange: (task: TaskInterface[]) => void;
}

const TasksList: FC<TasksListProps> = ({ tasks, onTasksChange }) => {
    const [openCreationForm, setOpenCreationForm] = useState<boolean>(false);

    const handleCreationFormToggle = () => {
        setOpenCreationForm(!openCreationForm);
    };

    const handleTaskSubmit = (task: Omit<TaskInterface, 'id' | 'creationDate'>) => {
        const newTask: TaskInterface = {
            ...task,
            id: crypto.randomUUID(), // Генерируем уникальный ID
            creationDate: new Date(), // Текущая дата
        };
        onTasksChange([...tasks, newTask]);
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