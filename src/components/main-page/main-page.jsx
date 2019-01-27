import * as React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {UserInfo} from 'components/user-info';
import {UserForm} from 'components/user-form';

export const MainPage = connect(
    null,
    {
        push
    }
)(({push}) => (
    <div>
        MainPage
        <UserInfo />
        ----
        <UserForm />
        <button
            onClick={() => {
                push('/cars');
            }}
        >
            Go somewhere 1
        </button>
        <button
            onClick={() => {
                push('/here-cars/more-cars');
            }}
        >
            Go somewhere 2
        </button>
    </div>
));
