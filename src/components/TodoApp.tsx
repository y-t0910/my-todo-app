'use client';
import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { useTodos } from '../hooks/useTodos';

export default function TodoApp() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Todo App</h1>
      <div className="space-y-6">
        <AddTodo addTodo={addTodo} />
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">タスクがありません</p>
        ) : (
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
      </div>
    </div>
  );
}
