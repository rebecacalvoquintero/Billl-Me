import Immutable from "immutable";
import {SUBMIT_INVOICE, CLEAR_FORM} from "../actions/Actions";

const DEFAULT_STATE = Immutable.Map({
    fromDate: new Date(),
    toDate: new Date(),
    amountPerDay: 0,
    numberOfDays: 0
});

export function reduce(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SUBMIT_INVOICE:
            return [...state, action.payload];
        case CLEAR_FORM:
            return state;
        default:
            return state
    }
}



