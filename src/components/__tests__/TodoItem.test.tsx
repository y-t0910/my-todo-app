import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoItem } from '../TodoItem';

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    title: 'テストタスク',
    completed: false,
    priority: 'medium',
  };

  const mockHandlers = {
    onToggle: jest.fn(),
    onDelete: jest.fn(),
    onEdit: jest.fn(),
  };

  it('タスクのタイトルと優先度が表示される', () => {
    render(
      <TodoItem
        todo={mockTodo}
        {...mockHandlers}
      />
    );

    expect(screen.getByText('テストタスク')).toBeInTheDocument();
    expect(screen.getByText('medium')).toBeInTheDocument();
  });

  it('チェックボックスをクリックするとonToggleが呼ばれる', () => {
    render(
      <TodoItem
        todo={mockTodo}
        {...mockHandlers}
      />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockHandlers.onToggle).toHaveBeenCalledWith(1);
  });

  it('削除ボタンをクリックするとonDeleteが呼ばれる', () => {
    render(
      <TodoItem
        todo={mockTodo}
        {...mockHandlers}
      />
    );

    fireEvent.click(screen.getByText('×'));
    expect(mockHandlers.onDelete).toHaveBeenCalledWith(1);
  });
});
