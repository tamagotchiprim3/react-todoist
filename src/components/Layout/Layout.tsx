import React, { FC } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
    return (
        <div className="App">
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;