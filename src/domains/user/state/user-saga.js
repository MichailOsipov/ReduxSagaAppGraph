import {call, put, takeEvery} from 'redux-saga/effects';
import {UserApi} from '../user-api';
import {
    USER_LOAD_REQUESTED,
    USER_LOAD_SUCCEEDED,
    USER_LOAD_FAILED
} from './actions';

function* loadUser() {
    try {
        const user = yield call(UserApi.loadUser);
        yield put({type: USER_LOAD_SUCCEEDED, payload: {user}});
    } catch (e) {
        yield put({type: USER_LOAD_FAILED, payload: {message: e.message}});
    }
}

export function* onRequestLoadUserSaga() {
    yield takeEvery(USER_LOAD_REQUESTED, loadUser);
}
