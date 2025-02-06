import React from 'react';
import { Todo } from '../types/todo';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: Props) => {
  return (
    <div className={`flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm
      ${todo.completed ? 'opacity-60 bg-gray-50' : ''}`}>
      <input
        type="checkbox"
        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`flex-1 text-gray-700 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
        {todo.title}
      </span>
      <span className={`px-2 py-1 text-xs font-semibold rounded-full
        ${todo.priority === 'low' ? 'bg-green-100 text-green-800' : ''}
        ${todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
        ${todo.priority === 'high' ? 'bg-red-100 text-red-800' : ''}`}>
        {todo.priority}
      </span>
      <button 
        className="text-red-500 hover:text-red-700 transition-colors"
        onClick={() => onDelete(todo.id)}
      >
        ×
      </button>
    </div>
  );
};