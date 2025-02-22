import React from 'react';
import { createRoot } from 'react-dom/client';
import Task from './Task';
import { TaskInterface } from '../../types/task-interface';

it('It should mount', () => {
    const div = document.createElement('div');
    const root = createRoot(div); // Создаём root
    root.render(<Task task={{} as TaskInterface} />); // Рендерим компонент
    root.unmount(); // Правильный способ размонтирования в React 18
});