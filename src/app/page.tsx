import { Providers } from './providers';
import { TodoApp } from '../components/TodoApp';

export default function Home() {
  return (
    <main className="todo-container">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      
      {/* 入力フォーム */}
      <div className="mb-4">
        <input
          type="text"
          className="todo-input"
          placeholder="新しいタスクを入力..."
        />
      </div>

      {/* Todoリスト */}
      <div>
        <div className="todo-item">
          <input type="checkbox" className="todo-checkbox" />
          <span className="todo-text">サンプルタスク</span>
          <button className="delete-button">×</button>
        </div>
      </div>

      {/* 追加ボタン */}
      <button className="todo-button mt-4">
        タスクを追加
      </button>
    </main>
  )
}
