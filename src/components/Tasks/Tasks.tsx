import React, { FC } from 'react';
import TasksList from '../TasksList/TasksList';
import TasksSearch from '../TasksSearch/TasksSearch';

interface TasksProps {
}

const Tasks: FC<TasksProps> = () => {


    return (<>

            <TasksSearch />
            <TasksList />
        </>
    );
};

export default Tasks;