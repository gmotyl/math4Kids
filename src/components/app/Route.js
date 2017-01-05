import * as actions from '../../actions'
import AppComponent from './AppComponent'
import AddForm from '../../forms/AddForm'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'
import { fetchGiphy } from '../../actions/fetchGiphy'
import mainReducer from '../../reducers/index'
import MultiplyForm from '../../forms/MultiplyForm'
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import SubstractForm from '../../forms/SubstractForm'
import thunkMiddleware from 'redux-thunk'

export default class Roote extends Component {
    render() {

        const store = createStore(mainReducer, composeWithDevTools(
            applyMiddleware(thunkMiddleware),
        ));

        store.dispatch(fetchGiphy('spongebob+happy'));
        store.dispatch(actions.newAdd());

        return (
            <Provider store={store}>
                <div>
                    <Router history={hashHistory}>
                        <Route path="/" component={AppComponent}>
                            <IndexRoute component={AddForm}></IndexRoute>
                            <Route path="substract" component={SubstractForm}></Route>
                            <Route path="multiply" component={MultiplyForm}></Route>
                        </Route>
                    </Router>
                </div>
            </Provider>
        );
    }
}
