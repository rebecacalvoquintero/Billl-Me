import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from 'components/App';
import InvoicesList from 'components/InvoicesList';
import InvoiceInput from "components/InvoiceInput";


describe("App test", () => {
    let wrapped;

    beforeEach(() => {

        wrapped = shallow(<App/>);
    })

    it('shows the title of the App', () => {
        const title = document.createElement('h2');
        ReactDOM.render(<App/>, title);

        expect(title.innerHTML).toContain('Invoice App')
    });

    it('contains the list of invoices', () => {

        expect(wrapped.find(InvoicesList).length).toEqual(1);
    });

    it('contains the add Invoice Componenr', () => {
        expect(wrapped.find(InvoiceInput).length).toEqual(1);
    });

})
