import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/actions/authActions';
import './NavBar.scss';

const NavBar = props => {
    if (props.uid) {
        return (
            <nav className="NavBar">
            <Link to="/" className="NavBar__logo">Tasks-app</Link>
            <ul className="NavBar__list">
                <li className="NavBar__list-item">
                    <Link 
                        to="/signin" 
                        className="NavBar__list-link"
                        onClick={() => props.signOut()}
                    >Log Out</Link>
                </li>
            </ul>
        </nav>
        )
    } 
    return (
        <nav className="NavBar">
            <Link to="/" className="NavBar__logo">Tasks-app</Link>
            <ul className="NavBar__list">
                <li className="NavBar__list-item"><Link to="/signin" className="NavBar__list-link">Sign In</Link></li>
                <li className="NavBar__list-item"><Link to="/signup" className="NavBar__list-link">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);