import React from 'react';
import { mount } from 'enzyme';
import {locator} from '../../TestUtils';

import InvoiceInput from "../../invoiceInput/InvoiceInput";


describe("Invoice Input", () => {
    let wrapped;

    beforeEach(() => {

        wrapped = mount(<InvoiceInput/>);
    });

    afterEach(() => {

        wrapped.unmount(<InvoiceInput/>);
    });

    it("contains 2 datePickers input, 2 input and one button" ,() => {
        expect(wrapped.find('DatePicker').length).toEqual(2);
        expect(wrapped.find(locator('amount-per-day')).length).toEqual(1);
        expect(wrapped.find(locator('number-of-days')).length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);

    });

    describe("change and submission of the form", () => {
        const date = new Date().toDateString();

        beforeEach(() => {
            wrapped.find(locator('from-date')).simulate('change', {
                target: {
                    value: date
                }
            });
            wrapped.find(locator('to-date')).simulate('change', {
                target: {
                    value:  date
                }
            });
            wrapped.update();
        });

        it("contains a datePicker input where users can select the date when the invoice starts and ends" ,() => {
            expect(wrapped.find(locator('to-date')).prop('value')).toEqual(date);
            expect(wrapped.find(locator('to-date')).prop('value')).toEqual(date);
        });

        it("you can submit all the data from the form and it will appear in the list of invoices" ,() => {

        });

        it("when submitting, the form is cleared" ,() => {
            wrapped.find('form').simulate('submit');
            wrapped.update();
            expect(wrapped.find(locator('from-date')).prop('value')).toEqual(date);
            expect(wrapped.find(locator('to-date')).prop('value')).toEqual(date);
        });

    })




})