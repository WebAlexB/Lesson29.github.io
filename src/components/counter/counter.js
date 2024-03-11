import React, { Component } from 'react';
import NumberButton from "../numberButton/numberButton";
import Display from "../display/display";
import ResetButton from "../resetButton/resetButton";
import '../counter/counter.css';

export default class Counter extends Component {
    handleButtonClick = (operation) => {
        const {value, onUpdateValue} = this.props;
        if (operation === "plus") {
            onUpdateValue(value + 1);
        } else if (operation === "minus") {
            onUpdateValue(value - 1);
        }
    };
    render() {
        const { value, onReset } = this.props;
        return (
            <div className="number-content">
                <div className="content-action">
                    <NumberButton onClick={() => this.handleButtonClick("plus")} text="+" />
                    <Display value={value} />
                    <NumberButton onClick={() => this.handleButtonClick("minus")} text="-" />
                </div>
                <ResetButton onClick={onReset} />
            </div>
        );
    }
}