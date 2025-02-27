import { FC, useContext } from 'react';
import './TaskFooter.scss';
import { TaskInterface } from '../../types/task-interface';
import { TasksContext } from '../../contexts/task-context';

const TaskFooter: FC = () => {
    const tasks: TaskInterface[] = useContext(TasksContext) || [];
    const expiredTasksCount = tasks.filter(
        (task) => task.expirationDate.getTime() < new Date().getTime(),
    ).length;

    return (
        <div className="footer">
            <span>Total: {tasks.length}</span>
            <span>Expired: {expiredTasksCount}</span>
        </div>
    );
};

export default TaskFooter;