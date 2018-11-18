import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducers} from 'reducers/Reducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {combineReducers} from 'redux-immutable';
import Immutable from 'immutable';

const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history);

let initialState = Immutable.Map();
let store = createStore(
    combineReducers({...reducers}),
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reactRouterMiddleware)));

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));