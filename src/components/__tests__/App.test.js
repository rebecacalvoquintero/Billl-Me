import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from '../App';
import InvoicesList from '../InvoicesList';
import AddInvoice from "../AddInvoice";


describe("App test", () => {

    it('shows the title of the App', () => {
        const title = document.createElement('h2');
        ReactDOM.render(<App/>, title);

        expect(title.innerHTML).toContain('Invoice App')
    });

    it('contains the list of invoices', () => {
        const wrapped = shallow(<App/>);

        expect(wrapped.find(InvoicesList).length).toEqual(1);
    });

    it('contains the add Invoice Componenr', () => {
        const wrapped = shallow(<App/>);

        expect(wrapped.find(AddInvoice).length).toEqual(1);
    });

})
