import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {MainPage} from 'components/main-page';
import {store} from 'store/store';

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    document.getElementById('root')
);
