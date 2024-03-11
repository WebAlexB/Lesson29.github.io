import React from 'react';
import '../resetButton/resetButton.css'

const ResetButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Reset</button>
    );
};

export default ResetButton;