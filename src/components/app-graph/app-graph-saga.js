import {get} from 'lodash';
import {takeLatest, select} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router';
import {removePathBorderSlashes} from 'utils/path';
import {verifyAppComponentsByGraph} from 'utils/app-components';
import {appGraph} from './app-graph';
import {getAppComponents} from './state';

const pathSelector = state => get(state, 'router.location.pathname');

function* setAppGraph() {
    const currPath = yield select(pathSelector);
    const pathWithoutBorderSlashes = removePathBorderSlashes(currPath);
    const appComponents = pathWithoutBorderSlashes ? pathWithoutBorderSlashes.split('/') : [];
    const prevAppComponents = yield select(getAppComponents);
    const isAppComponentsValidByGraph = verifyAppComponentsByGraph(appGraph, appComponents);
}

export function* appGraphSaga() {
    yield takeLatest(LOCATION_CHANGE, setAppGraph);
}
