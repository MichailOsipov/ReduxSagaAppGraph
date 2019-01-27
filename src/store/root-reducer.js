import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {connectRouter} from 'connected-react-router';
import {USER_STORE_KEY, userReducer} from 'domains/user/state';
import {history} from './history';

export const rootReducer = combineReducers({
    form: formReducer,
    router: connectRouter(history),
    [USER_STORE_KEY]: userReducer
});
