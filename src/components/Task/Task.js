import React from 'react';
import { connect } from "react-redux";
import { removeTask, markTaskDone } from "../../redux/actions/tasksActions";
import moment from 'moment';

const Task = props => {
    const task = props.task;
    const iconClasses = ['fas', 'fa-check-circle', 'tasks__list-item-icon'];
    if (task.isDone) {
        iconClasses.push('green-icon');
    } else {
        iconClasses.push('yellow-icon');
    }
    return (
        <li className="tasks__list-item">
            <div className="tasks__list-item-text tasks__list-item-text-tasks ">{task.text}</div>
            <div className="tasks__list-item-text">{moment(task.date.toDate()).calendar()}</div>
            <div className="tasks__list-item-wrapper">
            <i 
                className={iconClasses.join(' ')} 
                onClick={() => props.markTaskDone(task)}
            ></i>
            <i 
                className="fas fa-trash-alt tasks__list-item-icon trash-icon"
                onClick={() => props.removeTask(task)}
            ></i>
            </div>
        </li>
    )
}

const mapDispatchTotask = dispatch => {
    return {
        markTaskDone: task => dispatch(markTaskDone(task)),
        removeTask: task => dispatch(removeTask(task))
    }
}

export default connect(null, mapDispatchTotask)(Task);