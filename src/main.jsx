import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {MainPage} from 'components/main-page';
import {store} from 'store/store';
import {history} from 'store/history';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainPage />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
