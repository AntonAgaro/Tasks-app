import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {onChangeEmailAndPassword, signIn} from '../../redux/actions/authActions';
import './Auth.scss';

const  SignIn = props => {
    const handleChange = (e) => {
        const target = e.target;
        props.onChangeEmailAndPassword(target.type, target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn(props.user);
    }

    const renderError = () => {
        if (props.error.message) {
            return (
                <h1 className="form-wrapper__title  form-wrapper__title--red">Incorrect email or password!</h1>
            )
        }
    }

        if (props.uid) {
            return <Redirect to="/"/>
        }
        return (
            <div className="form-wrapper">
                <h1 className="form-wrapper__title">Sign In</h1>
                    {renderError()}
                <form 
                    id="signin-form"
                    className="form" 
                    onSubmit={handleSubmit}
                >
                    <input 
                        className="form__input" 
                        type="email" 
                        placeholder="Email" 
                        onChange={handleChange}
                        required
                    />
                    <input 
                        className="form__input" 
                        type="password" 
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        minLength="6"
                    />
                    <button className="form__button" type="sumbit">Sign in</button>
                </form>
            </div>
        );
    }

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    const error = state.authReducer.error;
    return {
        state,
        uid: uid,
        user: state.authReducer.user,
        error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeEmailAndPassword: (name, value) => dispatch(onChangeEmailAndPassword(name, value)),
        signIn: creds => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);