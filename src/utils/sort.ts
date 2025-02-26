import { TaskInterface, TaskPriority } from '../types/task-interface';
import { SortTypes } from '../types/sort';

export const sortTasks = (
    tasks: TaskInterface[],
    sortType: SortTypes,
): TaskInterface[] => {
    const sortedTasks = [...tasks]; // Создаем копию массива, чтобы не мутировать оригинал

    if (sortType === SortTypes.CreationDateASC) {
        return sortedTasks.sort(
            (a, b) => a.creationDate.getTime() - b.creationDate.getTime(),
        );
    } else if (sortType === SortTypes.ExpDateASC) {
        return sortedTasks.sort(
            (a, b) => a.expirationDate.getTime() - b.expirationDate.getTime(),
        );
    } else if (sortType === SortTypes.PriorityASC) {
        return sortedTasks.sort((a, b) => {
            const priorityOrder: { [key in TaskPriority]: number } = {
                [TaskPriority.Low]: 0,
                [TaskPriority.Medium]: 1,
                [TaskPriority.High]: 2,
                [TaskPriority.Urgent]: 3,
            };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
    } else if (sortType === SortTypes.PriorityDESC) {
        return sortedTasks.sort((a, b) => {
            const priorityOrder: { [key in TaskPriority]: number } = {
                [TaskPriority.Low]: 0,
                [TaskPriority.Medium]: 1,
                [TaskPriority.High]: 2,
                [TaskPriority.Urgent]: 3,
            };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    } else {
        return sortedTasks;
    }
};