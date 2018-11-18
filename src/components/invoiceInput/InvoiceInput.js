import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import styles from './invoiceInput.scss';

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
                <div className="form-first-column">
                    <div className="form-input">
                        <label>From: </label>
                        <DatePicker
                            selected={this.state.date}
                            onSelect={this.handleSelect}
                            onChange={this.handleChange}
                            placeholder={'Select date'}
                            displayFormat={'DD/MM/YYYY'}
                        />
                    </div>
                    <div className="form-input">
                        <label>To: </label>
                        <DatePicker
                            selected={this.state.date}
                            onSelect={this.handleSelect}
                            onChange={this.handleChange}
                            placeholder={'Select date'}
                            displayFormat={'DD/MM/YYYY'}
                        />
                    </div>
                </div>
                <div className="form-second-column">
                    <div className="form-input">
                        <label>Amount per day: </label>
                        <input/>
                    </div>
                    <div className="form-input">
                        <label>Number of days: </label>
                        <input/>
                    </div>
                </div>

            </form>
        )
    }
};

export default InvoiceInput;
