import {SUBMIT_INVOICE} from '../actions/Actions';
import Immutable from 'immutable';

export function submitInvoice(formData) {
    return {
        type: SUBMIT_INVOICE,
        payload: formData
    };
}