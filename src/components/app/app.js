// App.js
import React, { Component } from 'react';
import '../app/app.css';
import Counter from "../counter/counter";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5
        };
    }

    handleUpdateValue = (newValue) => {
        this.setState({ value: newValue });
    };

    handleReset = () => {
        this.setState({ value: 0 });
    };

    render() {
        return (
            <Counter
                value={this.state.value}
                onUpdateValue={this.handleUpdateValue}
                onReset={this.handleReset}
            />
        );
    }
}
