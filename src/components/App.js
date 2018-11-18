import React, {Component} from 'react';

import AddInvoice from './AddInvoice';
import InvoicesList from './InvoicesList';
import Invoice from './Invoice';

import '../App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <h2>Invoice App</h2>
                </header>
                <AddInvoice/>
                <InvoicesList/>
            </div>
        );
    }
}

export default App;
