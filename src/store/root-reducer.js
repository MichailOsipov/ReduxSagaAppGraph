import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {connectRouter} from 'connected-react-router';
import {USER_STORE_KEY, userReducer} from 'domains/user/state';
import {APP_GRAPH_STORE_KEY, appGraphReducer} from 'components/app-graph/state';
import {history} from './history';

export const rootReducer = combineReducers({
    form: formReducer,
    router: connectRouter(history),
    [APP_GRAPH_STORE_KEY]: appGraphReducer,
    [USER_STORE_KEY]: userReducer
});
