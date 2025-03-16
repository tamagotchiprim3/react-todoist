import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router';
import { historyRoutes } from './history.routes';

const Layout = lazy(() => import('../components/Layout/Layout'));
const Tasks = lazy(() => import('../pages/Tasks/Tasks'));
const History = lazy(() => import('../pages/History/History'));

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'tasks',
                element: <Tasks />,
            },
            {
                path: 'history',
                element: <History />,
                children: [...historyRoutes],
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/tasks" />,
    },
];