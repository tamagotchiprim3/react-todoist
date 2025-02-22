import React from 'react';
import { createRoot } from 'react-dom/client';
import Tasks from '../Tasks/Tasks';

it('It should mount', () => {
  const div = document.createElement("div");
  const root = createRoot(div); // Создаём root
  root.render(<Tasks />); // Рендерим компонент
  root.unmount(); // Правильный способ размонтирования в React 18
});