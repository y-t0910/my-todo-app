// Todoアイテムの型定義
export interface Todo {
  id: number;      // TodoのユニークID
  text: string;    // Todoの内容
  completed: boolean; // 完了状態
}