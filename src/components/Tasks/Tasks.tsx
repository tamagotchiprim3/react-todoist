import React, { FC, useMemo, useReducer } from 'react';
import TasksList from '../TasksList/TasksList';
import TasksSearch from '../TasksSearch/TasksSearch';
import { SortTypes } from '../../types/sort';
import { TaskInterface, TaskPriority } from '../../types/task-interface';
import { filterTasks } from '../../utils/filter';
import { sortTasks } from '../../utils/sort';
import TaskFooter from '../TaskFooter/TaskFooter';
import './Tasks.scss';
import { TaskAction, tasksReducer } from '../../reducers/task-reducer';

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
    const [sort, setSort] = React.useState<SortTypes>(
        SortTypes.CreationDateASC,
    );
    const [search, setSearch] = React.useState<string>('');

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

    const handleSortChange = (sort: SortTypes) => {
        setSort(sort);
    };

    const handleSearchChange = (search: string) => {
        setSearch(search);
    };

    const handleTasksChange = (action: TaskAction) => {
        dispatch(action);
        console.log(action);
    };

    const filteredAndSortedTasks: TaskInterface[] = useMemo(() => {
        let result = [...tasks]; // Начинаем с исходного массива
        result = filterTasks(result, search); // Применяем фильтр поиска
        result = sortTasks(result, sort); // Применяем сортировку
        return result;
    }, [tasks, search, sort]);

    return (
        <div className="tasks">
            <TasksSearch
                search={search}
                sort={sort}
                onSearchChange={handleSearchChange}
                onSortChange={handleSortChange}
            />
            <TasksList
                tasks={[...filteredAndSortedTasks]}
                dispatch={handleTasksChange}
            />
            <TaskFooter tasks={tasks} />
        </div>
    );
};

export default Tasks;