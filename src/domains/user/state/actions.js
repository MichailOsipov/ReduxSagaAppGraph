export const USER_LOAD_REQUESTED = 'USER_LOAD_REQUESTED';
export const USER_LOAD_SUCCEEDED = 'USER_LOAD_SUCCEEDED';
export const USER_LOAD_FAILED = 'USER_LOAD_FAILED';

export const setUserLoadRequested = () => ({type: USER_LOAD_REQUESTED});
export const setUserLoadSucceeded = ({user}) => ({type: USER_LOAD_SUCCEEDED, payload: {user}});
export const setUserLoadFailed = () => ({type: USER_LOAD_FAILED});
