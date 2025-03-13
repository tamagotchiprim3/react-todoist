import { TaskInterface } from '../shared/types/task-interface';
import {
    ActionDispatch,
    createContext,
    FC,
    useMemo,
    useReducer,
} from 'react';
import { SortTypes } from '../shared/types/sort';
import { checkExpiration } from '../shared/utils/check-expiration';
import TASKS_MOCK from '../shared/utils/tasks.mock';
import { filterTasks } from '../shared/utils/filter';
import { sortTasks } from '../shared/utils/sort';

export interface TaskAction {
    type: 'create' | 'delete' | 'clearExpired';
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
        case 'clearExpired': {
            return tasks.filter((task) =>
                checkExpiration(task.expirationDate),
            );
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
    const [tasks, dispatch] = useReducer(tasksReducer, TASKS_MOCK);

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