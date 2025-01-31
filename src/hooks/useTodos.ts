import { useState } from 'react';
import { Todo } from '../types';

export const useTodos = () => {
  // Todoリストの状態を管理
  const [todos, setTodos] = useState<Todo[]>([]);

  // 新しいTodoを追加する関数
  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: Date.now(), // 現在のタイムスタンプをIDとして使用
        text,
        completed: false,
      },
    ]);
  };

  // Todoの完了状態を切り替える関数
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 指定されたIDのTodoを削除する関数
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
