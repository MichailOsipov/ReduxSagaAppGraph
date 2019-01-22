import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {USER_STORE_KEY, userReducer} from 'domains/user/state';

export const rootReducer = combineReducers({
    form: formReducer,
    [USER_STORE_KEY]: userReducer
});
