import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button onSubmit={onFormSubmit}>Add Book</button>
        </form>
    );
};

export default BookForm;
