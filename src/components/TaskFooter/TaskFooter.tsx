import { FC } from 'react';
import './TaskFooter.scss';
import { TaskInterface } from '../../types/task-interface';

interface TaskFormProps {
    tasks: TaskInterface[];
}

const TaskFooter: FC<TaskFormProps> = ({ tasks }) => {
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