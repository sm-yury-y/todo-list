import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

const App = () => {

  const todoData = [
    { label: 'Выпить кофе', important: false, id: 1 },
    { label: 'Почитать книгу', important: true, id: 2 },
    { label: 'Пообедать', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
