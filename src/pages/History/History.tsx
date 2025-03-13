import React, { FC } from 'react';
import { Link, Outlet } from 'react-router';

interface HistoryProps {}

const History: FC<HistoryProps> = () => {
    return (
        <>
            <div>1123</div>
            <Link to="history2">to History 2</Link>
            <Outlet></Outlet>
        </>
    );
};

export default History;