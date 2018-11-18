import React, {Component} from 'react';

import InvoiceInput from 'components/invoiceInput/InvoiceInput';
import InvoicesList from 'components/InvoicesList';
import Invoice from 'components/Invoice';

import '../App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <h2>Invoice App</h2>
                </header>
                <InvoiceInput/>
                <InvoicesList/>
            </div>
        );
    }
}

export default App;
