import React, { Component } from 'react';
import NumberButton from "../numberButton/numberButton";
import Display from "../display/display";
import ResetButton from "../resetButton/resetButton";
import '../counter/counter.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    handleButtonClick = (operation) => {
        this.setState((prevState) => {
            if (operation === "plus") {
                return { value: prevState.value + 1 };
            } else if (operation === "minus") {
                return { value: prevState.value - 1 };
            }
        });
    };

    handleReset = () => {
        this.setState({ value: this.props.value });
    };

    render() {
        return (
            <div className="number-content">
                <div className="content-action">
                    <NumberButton onClick={() => this.handleButtonClick("plus")} text="+" />
                    <Display value={this.state.value} />
                    <NumberButton onClick={() => this.handleButtonClick("minus")} text="-" />
                </div>
                <ResetButton onClick={this.props.onReset} />
            </div>
        );
    }
}
