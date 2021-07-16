import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import isCreated from '../../redux/actions/uiActions';
import './AddNote.scss';
import plus from './image/plus.svg';

class AddNote extends Component {

    doIsCreatedToFalse = () => {
        this.props.isCreated(false);
    }

    render() {
        return (
            <div className="add-note">
                <h3 className="add-note__title">
                You’ve got &nbsp; 
                <span className="add-note__span">
                    {this.props.tasks ? this.props.tasks.length : ' 0'} tasks
                </span> today 
                </h3>
                <button 
                    className="add-note__btn"
                    onClick={this.doIsCreatedToFalse}
                >
                    <img className="add-note__btn-img" src={plus} alt="plus" />
                    <Link to="/add" className="add-note__btn-text">Add New</Link>
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const tasks = state.firestore.ordered.tasks;
    return {
        tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isCreated: bool => dispatch(isCreated(bool))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNote);