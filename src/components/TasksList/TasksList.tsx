import React, { FC } from 'react';
import { TaskInterface } from '../../types/taskInterface';
import Task from '../Task/Task';

interface TasksListProps {
    tasks: TaskInterface[];
}

const TasksList: FC<TasksListProps> = ({ tasks }) => {


    return (
        <>
            {tasks.map((task: TaskInterface) => <Task key={task.id} task={task}></Task>)}
        </>
    );
};

export default TasksList;