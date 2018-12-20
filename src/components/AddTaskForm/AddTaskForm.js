import React from 'react';

import './AddTaskForm.css'

const AddTaskForm = props => (
    <p>
        <input type="text" value={props.value} onChange={props.changeHandler} />
        <button onClick={props.onClick}>Add</button>
    </p>

);

export default AddTaskForm;