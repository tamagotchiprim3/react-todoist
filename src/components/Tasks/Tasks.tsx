import React, { FC } from 'react';
import TasksList from '../TasksList/TasksList';
import { TaskInterface } from '../../types/task-interface';
import TasksSearch from '../TasksSearch/TasksSearch';

interface TasksProps {
}

const Tasks: FC<TasksProps> = () => {

    const tasksMock: TaskInterface[] = [
        {
            id: '1',
            title: 'Fix login bug',
            description: 'Resolve the login issue in production',
            creationDate: new Date('2025-02-20T10:00:00'),
            exparationDate: new Date('2025-02-25T18:00:00'),
            priority: 'urgent',
        },
        {
            id: '2',
            title: 'Write unit tests',
            description: 'Cover 80% of the codebase with tests',
            creationDate: new Date('2025-02-21T09:30:00'),
            exparationDate: new Date('2025-02-26T17:00:00'),
            priority: 'medium',
        },
        {
            id: '3',
            title: 'Update documentation',
            description: 'Add API documentation for the new features',
            creationDate: new Date('2025-02-22T12:00:00'),
            exparationDate: new Date('2025-02-27T15:00:00'),
            priority: 'low',
        },
    ];


    return (<>

            <TasksSearch />
            <TasksList tasks={tasksMock} />
        </>
    );
};

export default Tasks;