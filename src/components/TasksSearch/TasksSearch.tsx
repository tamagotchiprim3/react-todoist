import React, { FC } from 'react';
import { Input, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './TasksSearch.scss';
import { SortTypes } from '../../types/sort';

interface TasksSearchProps {
    search: string;
    onSearchChange: (search: string) => void;
    sort: SortTypes;
    onSortChange: (sort: SortTypes) => void;
}

const TasksSearch: FC<TasksSearchProps> = ({
    sort,
    onSortChange,
    search,
    onSearchChange,
}) => {
    const handleSortChange = (event: SelectChangeEvent<SortTypes>) => {
        onSortChange(event.target.value as SortTypes);
    };

    // Обработчик для Input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    return (
        <div className="search">
            <Input
                value={search}
                onChange={handleSearchChange}
                className="search__input"
                placeholder="Search task"
            />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
            >
                <MenuItem value={SortTypes.CreationDateASC}>
                    Creation date
                </MenuItem>
                <MenuItem value={SortTypes.ExpDateASC}>
                    Expiration date
                </MenuItem>
                <MenuItem value={SortTypes.PriorityASC}>
                    Priority (ASC)
                </MenuItem>
                <MenuItem value={SortTypes.PriorityDESC}>
                    Priority (DESC)
                </MenuItem>
            </Select>
        </div>
    );
};

export default TasksSearch;