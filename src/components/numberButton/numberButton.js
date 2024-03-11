import React from 'react';
import '../numberButton/numberButton.css'

const NumberButton = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default NumberButton;