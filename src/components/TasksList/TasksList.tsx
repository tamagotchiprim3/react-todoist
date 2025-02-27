import React, { ActionDispatch, FC, useContext, useState } from 'react';
import { TaskInterface } from '../../types/task-interface';
import Task from '../Task/Task';
import './TasksList.scss';
import { Card } from '@mui/material';
import TaskForm from '../TaskForm/TaskForm';
import {
    TaskAction,
    TasksContext,
    TasksDispatchContext,
} from '../../contexts/task-context';

const TasksList: FC = () => {
    const [openCreationForm, setOpenCreationForm] = useState<boolean>(false);
    const tasks: TaskInterface[] = useContext(TasksContext) || [];
    const dispatchTasks: ActionDispatch<[action: TaskAction]> =
        useContext(TasksDispatchContext)!;

    const handleCreationFormToggle = () => {
        setOpenCreationForm(!openCreationForm);
    };

    const handleTaskSubmit = (
        task: Omit<TaskInterface, 'id' | 'creationDate'>,
    ) => {
        const newTask: TaskInterface = {
            ...task,
            id: crypto.randomUUID(), // Генерируем уникальный ID
            creationDate: new Date(), // Текущая дата
        };
        dispatchTasks({
            type: 'create',
            message: newTask,
        });
    };

    function handleTaskDelete(task: TaskInterface) {
        dispatchTasks({
            type: 'delete',
            message: task,
        });
    }

    return (
        <>
            {tasks.length > 0 && (
                <div className="tasks-wrapper">
                    {tasks.map((task: TaskInterface) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={handleTaskDelete}
                        ></Task>
                    ))}
                    <Card
                        className="creation-card"
                        sx={{ background: '#2196f3' }}
                        onClick={handleCreationFormToggle}
                    >
                        Create
                    </Card>
                    {openCreationForm && (
                        <TaskForm
                            open={openCreationForm}
                            onClose={handleCreationFormToggle}
                            onSubmit={handleTaskSubmit}
                        ></TaskForm>
                    )}
                </div>
            )}
        </>
    );
};

export default TasksList;