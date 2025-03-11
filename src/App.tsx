import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Tasks from './pages/Tasks/Tasks';
import History from './pages/History/History';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="tasks" element={<Tasks />} />
                <Route path="history" element={<History />} />
            </Route>
            <Route path="*" element={<Navigate to="/tasks"></Navigate>} />
        </Routes>
    );
}

export default App;