'use client';
import React, { JSX } from 'react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

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
      {todos.map((todo: Todo) => (
        <TodoItem 
          key={todo.id}
          todo={todo.Todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={function (id: number, newTitle: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;