import React, { FC, useState } from 'react';
import { Button, Input, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './TasksSearch.scss';
import { SortTypes } from '../../types/sort';

interface TasksSearchProps {

}

const TasksSearch: FC<TasksSearchProps> = () => {

    const [sort, setSort] = useState<SortTypes>(SortTypes.CreationDateASC);


    const handleChangeSort = (event: SelectChangeEvent) => {
        const newValue = event.target.value as SortTypes; // Type assertion
        console.log(newValue);
        setSort(newValue);
    };


    return (
        <div className="search">
            <Input className="search__input" placeholder="Search task" />
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleChangeSort}
            >
                <MenuItem value={SortTypes.CreationDateASC}>Creation date</MenuItem>
                <MenuItem value={SortTypes.expDateASC}>Expiration date</MenuItem>
                <MenuItem value={SortTypes.PriorityASC}>Priority (ASC)</MenuItem>
                <MenuItem value={SortTypes.PriorityDESC}>Priority (DESC)</MenuItem>
            </Select>
            <Button className="search__create-button" size="large">Create</Button>
        </div>
    );
};

export default TasksSearch;