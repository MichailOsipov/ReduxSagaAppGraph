import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {USER_STORE_KEY} from './store-key';

const getUserDomain = getDomain(USER_STORE_KEY);

export const getUserLoadStatus = createSelector(
    getUserDomain,
    ({loadStatus}) => loadStatus
);

export const getUserInfo = createSelector(
    getUserDomain,
    ({userInfo}) => userInfo
);
