import React from 'react';
import TasksList from './TasksList';
import { createRoot } from 'react-dom/client';
import { TaskInterface } from '../../types/taskInterface';


it('It should mount', () => {
    const div = document.createElement('div');
    const root = createRoot(div); // Создаём root
    root.render(<TasksList tasks={{} as TaskInterface[]} />); // Рендерим компонент
    root.unmount(); // Правильный способ размонтирования в React 18
});