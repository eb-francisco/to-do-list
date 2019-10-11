import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Task from './Task';
import {maxNumber} from '../helper/index';

class App extends Component {

    constructor(){
        super();

        this.state = {
            tasks: [],
        }
    }

    addTask = () => {
        const {tasks}  = this.state;
        const ids = this.state.tasks.map(task => task.id);
        const maxId = maxNumber(ids);

        tasks.push({id: maxId + 1});
        this.setState({tasks})
    }

    removeTask = id => {
        const tasks = this.state.tasks.filter(
            task => task.id !== id,
        )
        this.setState({tasks});
    }

    render()
    {
        return(
            <div>
                <h2>
                    To-do List
                </h2>
                <div className='task-list'>
                    {
                        this.state.tasks.map(task =>
                        {
                            return(
                                <Task 
                                    key={task.id}
                                    task={task}
                                    removeTask={this.removeTask}
                                />
                            ) 
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addTask}>Add task</Button>
            </div>
        )
    }
}

export default App;
