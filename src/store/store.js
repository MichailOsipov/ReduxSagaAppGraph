import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {rootReducer} from './root-reducer';
import {rootSaga} from './root-saga';
import {history} from './history';

const reduxLogger = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({ maxAge: 10 }) : f => f;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware, thunk, routerMiddleware(history)),
        reduxLogger
    ),
);

sagaMiddleware.run(rootSaga);
