import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <nav>
                    <NavLink to="/tasks" end>
                        <Button>Tasks</Button>
                    </NavLink>
                    <NavLink to="/history" end>
                        <Button>History</Button>
                    </NavLink>
                </nav>
            </Box>
        </>
    );
};

export default Header;