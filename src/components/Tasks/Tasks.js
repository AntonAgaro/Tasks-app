import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import './Tasks.scss';
import Task from '../Task/Task';
import { Component } from 'react';


class Tasks extends Component {
    
    render() {
        return (
            <div className="tasks">
                <h4 className="tasks__title">On Hold</h4>
                <ul className="tasks__list">
                    {this.props.tasks && this.props.tasks.map((task) => {
                        return (
                            <Task task={{...task}} key={task.id}/>
                        )
                    })} 
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid;
    const tasks = state.firestore.ordered.tasks;
    const isLogout = state.uiReducer.isLogout;
    return {
        state,
        tasks: tasks,
        uid: uid,
        isLogout
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        {
            collection: 'tasks',
            where: ['authorId', '==', ownProps.uid],
            orderBy: ['date', 'desc']
        }
    ])  
)(Tasks);
