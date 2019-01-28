import {all} from 'redux-saga/effects';
import {onRequestLoadUserSaga} from 'domains/user';
import {appGraphSaga} from 'components/app-graph';

export function* rootSaga() {
    yield all([
        onRequestLoadUserSaga(),
        appGraphSaga()
    ]);
}
