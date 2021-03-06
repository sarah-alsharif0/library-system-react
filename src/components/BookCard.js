import React from 'react'
import '../assets/styles/BookCard.css'

export const BookCard = (props) => {
    const {book, handleClick,index } = props;
    const handleSubmit = () => {
        handleClick(index);
    }
    return (
        <div className="book-card">
            <h3 className="book-title">
                {book.title}
            </h3>
            <img alt="" src={book.image} className="book-image"/>
            
            <button onClick={handleSubmit} className="borrow-button">Borrow Now</button>
            </div>
    )
}