import {get} from 'lodash';
import {takeLatest, select} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router';

const pathSelector = state => get(state, 'router.location.pathname');

function* setAppGraph() {
    const currPath = yield select(pathSelector);
    console.log(currPath);
}

export function* appGraphSaga() {
    yield takeLatest(LOCATION_CHANGE, setAppGraph);
}
