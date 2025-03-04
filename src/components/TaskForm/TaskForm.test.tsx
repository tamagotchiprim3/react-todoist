import React from 'react';
import { createRoot } from 'react-dom/client';
import TaskForm from './TaskForm';

it('It should mount', () => {
    const div = document.createElement('div');
    const root = createRoot(div); // Создаём root
    root.render(
        <TaskForm open={false} onClose={() => {}} onSubmit={() => {}} />,
    ); // Рендерим компонент
    root.unmount(); // Правильный способ размонтирования в React 18
});
