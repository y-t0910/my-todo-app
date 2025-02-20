import React, { useState, FormEvent } from 'react';

type TodoFormProps = {
    onAddTodo: (title: string) => void;
};

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a todo"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};