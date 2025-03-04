import React, { FC, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const [currentTab, setTab] = useState<number>(0);

    const handleChange = (
        event: React.SyntheticEvent,
        newValue: number,
    ) => {
        console.log('Selected Tab:', newValue); // Logs tab index when changed
        setTab(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
        </>
    );
};

export default Header;
