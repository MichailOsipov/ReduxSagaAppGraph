import {
    USER_LOAD_REQUESTED,
    USER_LOAD_SUCCEEDED,
    USER_LOAD_FAILED
} from './actions';

const DEFAULT_STATE = {
    userInfo: {},
    loadStatus: 'unknown'
};

export const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case USER_LOAD_REQUESTED:
            return {
                ...state,
                loadStatus: 'loading'
            };
        case USER_LOAD_SUCCEEDED:
            return {
                ...state,
                loadStatus: 'succeeded',
                userInfo: action.payload.user
            };
        case USER_LOAD_FAILED:
            return {
                ...state,
                loadStatus: 'failed'
            };
        default:
            return state;
    }
};
