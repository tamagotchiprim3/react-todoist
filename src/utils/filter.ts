import { TaskInterface } from '../types/task-interface';

export const filterTasks = (
    tasks: TaskInterface[],
    search: string,
): TaskInterface[] => {
    if (!search) return [...tasks];
    const lowerSearch = search.toLowerCase();
    return tasks.filter(
        (task) =>
            task.title.toLowerCase().includes(lowerSearch) ||
            task.description.toLowerCase().includes(lowerSearch),
    );
};