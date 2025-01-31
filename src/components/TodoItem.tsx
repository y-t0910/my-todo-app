import React from 'react';
import { Todo } from '../types';

// TodoItemコンポーネントのProps型定義
interface TodoItemProps {
  todo: Todo;             // 表示するTodoアイテム
  onToggle: (id: number) => void;  // 完了状態切り替え用コールバック
  onDelete: (id: number) => void;  // Todo削除用コールバック
}

// TodoItemコンポーネント: 個々のTodoアイテムを表示
const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li>
      {/* 完了状態を切り替えるチェックボックス */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {/* Todoのテキスト（完了時は取り消し線を表示） */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      {/* Todo削除ボタン */}
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
};

export default TodoItem;