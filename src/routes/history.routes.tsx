import { RouteObject } from 'react-router';
import { lazy } from 'react';

const HistoryChild = lazy(
    () => import('../components/HistoryChild/HistoryChild'),
);

export const historyRoutes: RouteObject[] = [
    {
        path: 'history2',
        element: <HistoryChild />,
    },
];