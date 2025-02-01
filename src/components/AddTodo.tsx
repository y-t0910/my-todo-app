import React, { useState, FormEvent } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {  // 空文字チェックを追加
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export { AddTodo };