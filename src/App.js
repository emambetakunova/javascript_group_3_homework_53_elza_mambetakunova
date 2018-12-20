import React, {Component} from 'react';

import './App.css';

import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from "./components/TaskComponent/Task";

const generatorId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

class App extends Component {
    state = {
        newTaskText: '',
        value: '',
        tasks: [
            {task: 'Buy milk', id: generatorId()},
            {task: 'Walk with dog', id: generatorId()},
            {task: 'Do homework', id: generatorId()}
        ],
        showTasks: true
    };

    addTask = () => {
        const newTask = {task: this.state.newTaskText, id: generatorId()};
        const tasks = [...this.state.tasks];
        tasks.push(newTask)
        this.setState({tasks, value: ''});
    };

    changeHandler = event => {
        this.setState({newTaskText: event.target.value, value: event.target.value});
    }

    removeTask = id => {
        const newTasks = [...this.state.tasks];
        newTasks.map();
        this.setState({});
    };

    render() {
        let tasks = null;

        if (this.state.showTasks) {
            tasks = this.state.tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task.task}
                    remove={() => this.removeTask(task.id)}
                />
            ));
        }

        return (
            <div className="App">
                <AddTaskForm
                    changeHandler={this.changeHandler}
                    value={this.state.value}
                    id={generatorId()}
                    onClick={() => this.addTask()}
                />
                {tasks}
            </div>
        );
    }
}

export default App;