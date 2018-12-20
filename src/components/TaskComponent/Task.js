import React from 'react';

import './Task.css'

const Task = props => (
    <div className="task">
        <p>{props.task}</p>
        <button className="removeBtn" onClick={props.remove}></button>
    </div>
);

export default Task;