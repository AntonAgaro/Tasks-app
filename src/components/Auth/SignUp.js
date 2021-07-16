import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { signUp, onChangeEmailAndPassword } from '../../redux/actions/authActions';
import './Auth.scss';

const SignUp = props => {

    const handleChange = (e) => {
        const target = e.target;
        props.onChangeEmailAndPassword(target.type, target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(props.user);
    }

    const errorMessage = () => {
        if (props.error.message) {
            return (
                <h1 className="form-wrapper__title  form-wrapper__title--red">
                    {props.error.message}
                </h1>
            )
        } else {
            return;
        }
    }

        if (props.uid) {
            return <Redirect to="/"/>
        }
        return (
            <div className="form-wrapper">
                <h1 className="form-wrapper__title">Sign Up</h1>
                {errorMessage()}
                <form 
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
                    <button className="form__button" type="sumbit">Sign Up</button>
                </form>
            </div>
        );
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    const user = state.authReducer.user;
    const error = state.authReducer.error;
    return {
        error,
        user, 
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