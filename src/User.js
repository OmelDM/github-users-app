import React from 'react';
import Avatar from './Avatar';
import {handleJson} from './utils';

export default class User extends React.Component {

    state = {
        user: {}
    };

    fetchUser(userLogin) {
        fetch(`https://api.github.com/users/${userLogin}`)
            .then(handleJson)
            .then(user => {
                this.setState({user});
            })
            .catch(error => {
                alert(error);
            });
    }

    componentDidMount() {
        const {match: {params: {user: userLogin}}} = this.props;
        this.fetchUser(userLogin);
    }

    componentWillReceiveProps({match: {params: {user: userLogin}}}) {
        this.setState({
            user: {}
        });
        this.fetchUser(userLogin);
    }

    render() {
        const {match: {params: {user : userLogin}}} = this.props;
        const {avatar_url: src} = this.state.user;

        return (
            <div className = 'card'>
                <Avatar src = {src} />
                <div className = 'card-body'>
                    <h1 className = 'card-title'>{userLogin}</h1>
                </div>
            </div>
        );
    }
}