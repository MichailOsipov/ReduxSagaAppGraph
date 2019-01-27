import * as React from 'react';
import {reduxForm, Field} from 'redux-form';

export const UserForm = reduxForm({
    form: 'user'
})(() => (
    <div>
        <Field name="name" component="input" />
    </div>
));
