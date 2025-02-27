import { TaskInterface } from '../types/task-interface';

export interface TaskAction {
    type: 'create' | 'delete';
    message?: TaskInterface;
}

export function tasksReducer(
    tasks: TaskInterface[] = [],
    action: TaskAction,
): TaskInterface[] {
    switch (action.type) {
        case 'create': {
            return [...tasks, action.message!];
        }
        case 'delete': {
            return tasks.filter((task) => task.id !== action.message?.id);
        }
        default: {
            return tasks;
        }
    }
}