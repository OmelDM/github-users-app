import React from 'react';

export default class User extends React.Component {

    state = {
        user: null
    };

    fetchUser() {
        const {match: {params: {user}}} = this.props;

        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(user => {
                this.setState({user});
            });
    }

    componentDidMount() {
        this.fetchUser();
    }

    componentWillReceiveProps() {
        this.fetchUser();
    }

    render() {
        const {match: {params: {user : userLogin}}} = this.props;
        const styles = {
            maxWidth: '230px'
        };
        
        return (
            <div className = 'card'>
                <img className = 'card-img' src = 'http://via.placeholder.com/230x230' style = {styles} alt = '' />
                <div className = 'card-body'>
                    <h1 className = 'card-title'>{userLogin}</h1>
                </div>
            </div>
        );
    }
}