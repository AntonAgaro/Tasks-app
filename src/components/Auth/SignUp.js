import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp, onChangeEmailAndPassword } from '../../redux/actions/authActions';
import './Auth.scss';

class SignUp extends Component {

    handleChange = (e) => {
        const target = e.target;
        this.props.onChangeEmailAndPassword(target.type, target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.props.state);
    }

    render() {
        if (this.props.uid) {
            return <Redirect to="/"/>
        }
        return (
            <div className="form-wrapper">
                <h1 className="form-wrapper__title">Sign Up</h1>
                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        className="form__input" 
                        type="email" 
                        placeholder="Email" 
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        className="form__input" 
                        type="password" 
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                        minLength="6"
                    />
                    <button className="form__button" type="sumbit">Sign Up</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        state: state.authReducer.user,
        uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeEmailAndPassword: (name, value) => dispatch(onChangeEmailAndPassword(name, value)),
        signUp: creds => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);