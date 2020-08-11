import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
        { title: 'the final empire', author: 'brandon sanderson', id: 2 },
    ]);

    const addNewBook = (title, author) => {
        setBooks([...books], { title, author, id: uuidv4() });
    };

    const deleteBook = () => {
        setBooks()
    }

    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
