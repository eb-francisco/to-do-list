import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap';

class Task extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            isCompleted: false,
        }
    }

    handleIsCompleted = () => {

        this.setState({
            isCompleted: !this.state.isCompleted
        })
    }

    render(){
        const {removeTask, task:{id}} = this.props;
    
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            className='input-name'
                            onChange={event => this.setState(
                                {name: event.target.value}
                            )}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check label='Completed'
                            className='check-is-completed'
                            onChange={this.handleIsCompleted}
                        />
                    </Form.Group>
                    <Button className='btn-remove' onClick={() => removeTask(id)}>
                        Remove task
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Task;
