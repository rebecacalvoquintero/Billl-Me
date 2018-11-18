import {bindActionCreators} from 'redux';
import InvoiceInput from './InvoiceInput';
import {connect} from 'react-redux';
import {toJs} from '../components/ImmutableToJs';


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         // submit: submitInvoiceThunk,
//     }, dispatch);
// }

function mapDispatchToProps(dispatch) { }

function mapStateToProps() {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(toJs(InvoiceInput));