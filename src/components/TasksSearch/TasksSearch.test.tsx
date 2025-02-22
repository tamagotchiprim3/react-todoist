import React from 'react';
import TasksSearch from './TasksSearch';
import { createRoot } from 'react-dom/client';


it('It should mount', () => {
    const div = document.createElement('div');
    const root = createRoot(div); // Создаём root
    root.render(<TasksSearch />); // Рендерим компонент
    root.unmount(); // Правильный способ размонтирования в React 18
});