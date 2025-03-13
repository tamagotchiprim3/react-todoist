import React, {
    ActionDispatch,
    FC,
    useContext,
    useEffect,
    useRef,
} from 'react';
import {
    Button,
    Input,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import './TasksSearch.scss';
import { SortTypes } from '../../shared/types/sort';
import {
    TaskAction,
    TasksDispatchContext,
} from '../../contexts/task-context';
import { Link } from 'react-router';

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
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatchTasks: ActionDispatch<[action: TaskAction]> = useContext(
        TasksDispatchContext,
    )!;

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, [sort]);

    const handleSortChange = (event: SelectChangeEvent<SortTypes>) => {
        onSortChange(event.target.value as SortTypes);
    };

    const handleSearchChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        onSearchChange(event.target.value);
    };

    const handleClearTasks = () => {
        dispatchTasks({
            type: 'clearExpired',
        });
    };

    return (
        <div className="search">
            <Input
                value={search}
                onChange={handleSearchChange}
                className="search__input"
                placeholder="Search task"
                inputRef={searchRef}
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
            <Button onClick={handleClearTasks} variant="outlined">
                Clear expired tasks
            </Button>
            <Link to="/history">
                <Button>Nav to History</Button>
            </Link>
        </div>
    );
};

export default TasksSearch;