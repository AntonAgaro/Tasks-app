import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addTask, onInputChange } from '../../redux/actions/tasksActions';
import taskIsCreated from '../../redux/actions/uiActions';

class CreatePage extends Component  {
    
    handleChange = e => {
        this.props.onInputChange('text', e.target.value);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.props.task);
        this.props.taskIsCreated(true);
        document.getElementById('create-form').reset();
    }

    render() {
        if (this.props.isCreated) {
            return (
                <Redirect to="/"/>
            )
        } else {
            return (
                <div className="form-wrapper">
                    <h1 className="form-wrapper__title">Create a Task</h1>
                    <form 
                        id="create-form"
                        className="form" 
                        action="submit"
                        onSubmit={this.handleSubmit}
                    >
                        <input 
                            className="form__input" 
                            type="text" 
                            placeholder="What you want to do?" 
                            onChange={this.handleChange}   
                            required 
                        />
                        <button className="form__button" type="sumbit">Create</button>
                    </form>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        task: state.tasksReducer.task,
        isCreated: state.uiReducer.isCreated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChange: (name, value) => dispatch(onInputChange(name, value)),
        addTask: task => dispatch(addTask(task)),
        taskIsCreated: bool => dispatch(taskIsCreated(bool))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);