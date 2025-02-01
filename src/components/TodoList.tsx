'use client';
import React, { JSX } from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

// TodoListコンポーネントのProps型定義
interface TodoListProps {
  todos: Todo[];           // Todoアイテムの配列
  onToggle: (id: number) => void;  // 完了状態切り替え用コールバック
  onDelete: (id: number) => void;  // Todo削除用コールバック
}

// TodoListコンポーネント: Todoアイテムのリストを表示
const TodoList = ({ todos, onToggle, onDelete }: TodoListProps): JSX.Element => {
  return (
    <ul>
      {/* 各Todoアイテムをマップしてレンダリング */}
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export { TodoList };
