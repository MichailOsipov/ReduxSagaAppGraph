import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {rootReducer} from './root-reducer';
import {rootSaga} from './root-saga';

const reduxLogger = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({ maxAge: 10 }) : f => f;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    compose(reduxLogger),
    applyMiddleware(sagaMiddleware, thunk)
);

sagaMiddleware.run(rootSaga);
