import { TaskInterface, TaskPriority } from '../types/task-interface';
import { ActionDispatch, createContext, FC, useMemo, useReducer } from 'react';
import { SortTypes } from '../types/sort';
import { filterTasks } from '../utils/filter';
import { sortTasks } from '../utils/sort';

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

interface TasksContextProps {
    search: string;
    sort: SortTypes;
    children: React.ReactNode;
}

export const TasksContext = createContext<TaskInterface[] | null>(null);
export const TasksDispatchContext = createContext<ActionDispatch<
    [action: TaskAction]
> | null>(null);

const TasksContextProvider: FC<TasksContextProps> = ({
    search,
    sort,
    children,
}) => {
    const [tasks, dispatch] = useReducer(tasksReducer, [
        {
            id: '1',
            title: 'Fix login bug',
            description: 'Resolve the login issue in production',
            creationDate: new Date('2025-02-20T10:00:00'),
            expirationDate: new Date('2025-02-25T18:00:00'),
            priority: TaskPriority.High,
        },
        {
            id: '2',
            title: 'Write unit tests',
            description: 'Cover 80% of the codebase with tests',
            creationDate: new Date('2025-02-21T09:30:00'),
            expirationDate: new Date('2025-02-26T17:00:00'),
            priority: TaskPriority.Medium,
        },
        {
            id: '3',
            title: 'Update documentation',
            description: 'Add API documentation for the new features',
            creationDate: new Date('2025-02-22T12:00:00'),
            expirationDate: new Date('2025-02-27T15:00:00'),
            priority: TaskPriority.Low,
        },
    ]);

    const filteredAndSortedTasks: TaskInterface[] = useMemo(() => {
        let result = [...tasks!];
        result = filterTasks(result, search);
        result = sortTasks(result, sort);
        return result;
    }, [tasks, search, sort]);

    return (
        <>
            <TasksContext.Provider value={[...filteredAndSortedTasks]}>
                <TasksDispatchContext.Provider value={dispatch}>
                    {children}
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    );
};

export default TasksContextProvider;