import React from 'react';

import './AddTaskForm.css'

const AddTaskForm = props => (
    <div className="addTaskForm">
        <input type="text" value={props.value} onChange={props.changeHandler} />
        <button className="addBtn" onClick={props.onClick}>Add</button>
    </div>

);

export default AddTaskForm;