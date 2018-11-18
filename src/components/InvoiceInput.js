import React, { Component } from 'react';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css"

class InvoiceInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
    };

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <form>
                <h4>Add Invoice</h4>
                <label>From: </label>
                <DatePicker
                    selected={this.state.date}
                    onSelect={this.handleSelect}
                    onChange={this.handleChange}
                    placeholder={'Select date'}
                    displayFormat={'DD/MM/YYYY'}
                />

                <label>To: </label>
                <DatePicker
                    selected={this.state.date}
                    onSelect={this.handleSelect}
                    onChange={this.handleChange}
                    placeholder={'Select date'}
                    displayFormat={'DD/MM/YYYY'}
                />

                <label>Amount per day: </label>
                <input />

                <label>Number of days: </label>
                <input />

            </form>
        )
    }
};

export default InvoiceInput;
