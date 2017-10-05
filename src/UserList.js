import React from 'react';
import {Link} from 'react-router-dom';
import {handleJson} from './utils';

export default class UserList extends React.Component {
    state = {
        users: null
    };

    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(handleJson)
            .then((users) => {
                this.setState({ users });
            })
            .catch(error => {
                alert(error);
            });;
    }

    render() {
        return (
            <ul>
                {this.state.users ? (
                    this.state.users.map((user) => <li key = {user.id}><Link to = {`/users/${user.login}`}>{user.login}</Link></li>)
                ) : (<h3>Loading...</h3>)}
            </ul>
        );
    }
}