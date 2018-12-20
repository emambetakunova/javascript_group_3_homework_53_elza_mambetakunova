import React from 'react';

import './Task.css'

const Task = props => (
    <div>
        <p>{props.task}</p>
        <button onClick={props.remove}>x</button>
    </div>
);

export default Task;