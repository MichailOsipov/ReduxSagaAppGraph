import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {APP_GRAPH_STORE_KEY} from './store-key';

const getAppGraphDomain = getDomain(APP_GRAPH_STORE_KEY);

export const getAppComponents = createSelector(
    getAppGraphDomain,
    ({appComponents}) => appComponents
);
