'use client';

import { useState } from 'react';
import { Todo } from '../types/todo';  
import TodoList from '../components/TodoList';  
import { todo } from 'node:test';
import { TodoForm } from '@/components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleAddTodo = (title: string) => {
    const newItem: Todo = {
      id: todos.length + 1,
      title,
      completed: false,
      createdAt: new Date(),
      priority: 'medium',
      Todo: {
        id: 0,
        title: undefined,
        priority: '',
        completed: false
      },
      map: function (arg0: (todo: Todo) => import("react").JSX.Element): import("react").ReactNode {
        throw new Error('Function not implemented.');
      },
      text: ''
    };
    setTodos([...todos, newItem]);
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
      
      {/* TodoFormを使用 */}
      <TodoForm onAdd={handleAddTodo} />

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

      {/* TodoListコンポーネントを使用 */}
      <TodoList
        todos={filteredTodos}
        onToggle={(id) => {
          setTodos(todos.map(t => 
            t.id === id ? { ...t, completed: !t.completed } : t
          ));
        }}
        onDelete={(id) => {
          setTodos(todos.filter(t => t.id !== id));
        }}
        onEdit={(id: number, newTitle: any) => {
          return setTodos(todos.map(t => t.id === id ? { ...t, title: newTitle } : t
          ));
        }}
      />
    </main>
  );
}
