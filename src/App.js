import React, {Component} from 'react';

import InvoicesList from 'invoicesList/InvoicesList';
import Invoice from 'Invoice';

import './App.css';
import InvoiceInputContainer from "./invoiceInput/InvoiceInputContainer";

class App extends Component {
    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <h2>Invoice App</h2>
                </header>
                <InvoiceInputContainer/>
                <InvoicesList/>
            </div>
        );
    }
}

export default App;

