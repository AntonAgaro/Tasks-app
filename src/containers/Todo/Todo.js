import React, { Component } from 'react';
import './Todo.scss';
import Search from '../../components/Search/Search';
import AddNote from '../../components/AddNote/AddNote';
import Tasks from '../../components/Tasks/Tasks';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Todo extends Component {
    
    render() {
        if (!this.props.uid) {
            return (
                <Redirect to="/signin"/>
            )
        }
        return (
            <div className="todo">
                <Search/>
                <AddNote 
                />
                <Tasks/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid
    }
}

export default connect(mapStateToProps)(Todo);