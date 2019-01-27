import {all} from 'redux-saga/effects';
import {onRequestLoadUserSaga} from 'domains/user';
import {appGraphSaga} from 'app-graph/app-graph-saga';

export function* rootSaga() {
    yield all([
        onRequestLoadUserSaga(),
        appGraphSaga()
    ]);
}
