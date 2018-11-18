import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from '../App';
import InvoicesList from '../invoicesList/InvoicesList';
import InvoiceInputContainer from "../invoiceInput/InvoiceInputContainer";


describe("App test", () => {
    let wrapped;

    beforeEach(() => {

        wrapped = shallow(<App/>);
    })

    it('contains the list of invoices', () => {

        expect(wrapped.find(InvoicesList).length).toEqual(1);
    });

    it('contains the add Invoice Component', () => {
        expect(wrapped.find(InvoiceInputContainer).length).toEqual(1);
    });

})
