import {all} from 'redux-saga/effects';
import {onRequestLoadUserSaga} from 'domains/user';

export function* rootSaga() {
    yield all([
        onRequestLoadUserSaga()
    ]);
}
