import {SET_APP_COMPONENTS} from './actions';

const DEFAULT_STATE = {
    appComponents: []
};

export const appGraphReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_APP_COMPONENTS:
            return {
                ...state,
                appComponents: action.payload.appComponents
            };
        default:
            return state;
    }
};
