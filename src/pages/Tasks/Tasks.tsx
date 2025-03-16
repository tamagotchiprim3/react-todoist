import React, { FC } from 'react';
import './Tasks.scss';
import TasksContextProvider from '../../contexts/task-context';
import TasksSearch from '../../components/TasksSearch/TasksSearch';
import { SortTypes } from '../../shared/types/sort';
import TasksList from '../../components/TasksList/TasksList';
import TaskFooter from '../../components/TaskFooter/TaskFooter';
import Counter from '../../features/counter/Counter';

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
    const [sort, setSort] = React.useState<SortTypes>(
        SortTypes.CreationDateASC,
    );
    const [search, setSearch] = React.useState<string>('');

    const handleSortChange = (sort: SortTypes) => {
        setSort(sort);
    };

    const handleSearchChange = (search: string) => {
        setSearch(search);
    };

    return (
        <TasksContextProvider search={search} sort={sort}>
            <div className="tasks">
                <Counter></Counter>
                <TasksSearch
                    search={search}
                    sort={sort}
                    onSearchChange={handleSearchChange}
                    onSortChange={handleSortChange}
                />
                <TasksList />
                <TaskFooter />
            </div>
        </TasksContextProvider>
    );
};

export default Tasks;