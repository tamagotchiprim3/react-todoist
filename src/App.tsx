import React, { Suspense } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useRoutes } from 'react-router';
import { routes } from './routes';

function App() {
    const routing = useRoutes(routes);

    return (
        <Suspense fallback={<div>Загрузка...</div>}>{routing}</Suspense>
    );
}

export default App;