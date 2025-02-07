import { ReactNode } from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';  
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

// Todoアイテムの型定義
export interface Todo {
  Todo: { id: number; title: ReactNode; priority: string; completed: boolean; };
  map(arg0: (todo: Todo) => import("react").JSX.Element): import("react").ReactNode;
  id: number;      // TodoのユニークID
  text: string;    // Todoの内容
  completed: boolean; // 完了状態
}

