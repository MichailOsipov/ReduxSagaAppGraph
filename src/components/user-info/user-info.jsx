import * as React from 'react';
import {connect} from 'react-redux';
import {
    setUserLoadRequested,
    getUserLoadStatus,
    getUserInfo
} from 'domains/user';

export const UserInfo = connect(
    state => ({
        userLoadStatus: getUserLoadStatus(state),
        userInfo: getUserInfo(state)
    }),
    {
        setUserLoadRequested
    }
)(
    class extends React.Component {
        onLoadUser = () => {
            console.log(this.props.setUserLoadRequested());
        }
        render() {
            const {userLoadStatus, userInfo} = this.props;
            const {
                firstname,
                lastname,
                age
            } = userInfo || {};
            const userInfoNotEmpty =
                firstname !== undefined
                && lastname !== undefined
                && age !== undefined;
            return (
                <div>
                    <button onClick={this.onLoadUser}>
                        Load User Info
                    </button>
                    <div>{`userLoadStatus: ${userLoadStatus}`}</div>
                    {userInfoNotEmpty && (
                        <div>
                            <div>userInfo:</div>
                            <div>{`firstname: ${firstname}`}</div>
                            <div>{`lastname: ${lastname}`}</div>
                            <div>{`age: ${age}`}</div>
                        </div>
                    )}
                </div>
            );
        }
    }
);
