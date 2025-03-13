import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import Layout from '../components/Layout/Layout';
import Tasks from '../pages/Tasks/Tasks';
import { historyRoutes } from './history.routes';
import History from '../pages/History/History';

// Определяем маршруты с использованием RouteObject
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
        element: <Navigate to="/tasks"></Navigate>,
    },
];