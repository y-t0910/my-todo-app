'use client';

import { useState } from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from '../components/TodoItem';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: crypto.randomUUID(),
      title: newTodo,
      completed: false,
      createdAt: new Date(),
      priority: 'medium',
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <main className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Todo App
      </h1>
      
      <form onSubmit={addTodo} className="mb-6">
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="新しいタスクを入力..."
        />
      </form>

      <div className="flex justify-center gap-4 mb-6">
        {(['all', 'active', 'completed'] as const).map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${filter === f 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'すべて' : f === 'active' ? '未完了' : '完了済み'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={(id) => {
              setTodos(todos.map(t => 
                t.id === id ? { ...t, completed: !t.completed } : t
              ));
            }}
            onDelete={(id) => {
              setTodos(todos.filter(t => t.id !== id));
            }}
            onEdit={(id, newTitle) => {
              setTodos(todos.map(t =>
                t.id === id ? { ...t, title: newTitle } : t
              ));
            }}
          />
        ))}
      </div>
    </main>
  );
}
