import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', ()=>{
    const id = 1;

    it('renders correctly', () => {
        expect(app.debug()).toMatchSnapshot();
    })

    it('initializes the `state` as an empty list', () => {
        expect(app.state().tasks).toEqual([]);
    });

    describe('when clicking `add task` button', ()=>{

        beforeEach(()=> {
            app.find('.btn-add').simulate('click');
        })
        afterEach(()=>{
            app.setState({tasks: []})
        })
        it('add a new task to state', () => {
            expect(app.state().tasks).toEqual([{id}])
        })
        it('should add a new task to the list', ()=> {
            expect(app.find('.task-list').children().length).toEqual(1);
        });

        it('creates a new Task componente', () => {
            expect(app.find('Task').exists()).toBe(true);
        });
    });

    describe('user wants to remove a task', () => {
        beforeEach(() => {
            app.instance().removeTask(id)
        })

        it('should remove task from state', () => {
            expect(app.state().tasks).toEqual([]);
        });
    });
})

