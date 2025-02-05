import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by <b>{book.author}</b></p>
      <p>Published: {book.year}</p>
      <a href={book.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
    </div>
  );
};

export default Book;