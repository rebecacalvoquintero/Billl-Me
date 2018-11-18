import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import styles from './invoiceInput.scss';

class InvoiceInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fromDate: new Date().toDateString(),
            toDate: new Date().toDateString(),
            amountPerDay: 0,
            numberOfDays: 0

        };
    };

    handleChangeFromDate = (date) => {
        this.setState({
            fromDate: date.toDateString(),
        });
    };

    handleChangeToDate = (date) => {
        this.setState({
            toDate: date.toDateString()
        });
    };

    handleAmountPerDay = (newInput) => {
        this.setState({
            amountPerDay: newInput
        });
    };

    handleNumberOfDays = (newInput) => {
        this.setState({
            numberOfDays: newInput
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            fromDate: new Date().toDateString(),
            toDate: new Date().toDateString(),
            amountPerDay: 0,
            numberOfDays: 0
        });
    };

    render() {
        return (
            <div>
                <h4>Add Invoice</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-first-column">
                        <div className="form-input">
                            <label>From: </label>
                            <DatePicker
                                onChange={this.handleChangeFromDate}
                                value={this.state.fromDate}
                                placeholder={'Select date'}
                                displayFormat={'DD/MM/YYYY'}
                                data-locator="from-date"
                            />
                        </div>
                        <div className="form-input">
                            <label>To: </label>
                            <DatePicker
                                onChange={this.handleChangeToDate}
                                value={this.state.toDate}
                                placeholder={'Select date'}
                                displayFormat={'DD/MM/YYYY'}
                                data-locator="to-date"
                            />
                        </div>
                    </div>
                    <div className="form-second-column">
                        <div className="form-input">
                            <label>Amount per day: </label>
                            <input
                                onInput={this.handleAmountPerDay}
                                data-locator="amount-per-day"
                            />
                        </div>
                        <div className="form-input">
                            <label>Number of days: </label>
                            <input
                                onInput={this.handleNumberOfDays}
                                data-locator="number-of-days"
                            />
                        </div>
                    </div>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
};

export default InvoiceInput;
