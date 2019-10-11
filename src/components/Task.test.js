import React from 'react';
import {shallow} from 'enzyme';
import Task from './Task.js';


describe('Task', ()=>{
    const mockRemove = jest.fn();
    const id = 1;
    const props = { task:
        {id},
        removeTask: mockRemove,
    };
    const task = shallow(<Task {...props} />);

    it('should render correcly', () =>{
        expect(task.debug()).toMatchSnapshot();
    });

    it('intializes task name and is completed in state', () =>{
        expect(task.state()).toEqual({name:'', isCompleted: false})
    });

    describe('when typing on name field', () => {
        const toDoTask = 'hacer retro';

        beforeEach(()=>{
            task.find('.input-name').simulate('change', {target: {value: toDoTask}});
        })

        it('updates the name in state', () => {
            expect(task.state().name).toEqual(toDoTask);
        })
    });

    describe('when clicking on isCompleted', () => {
        beforeEach(() => {
            task.find('.check-is-completed').simulate('change')
        })

        it('updates is completed in state', () => {
            expect(task.state().isCompleted).toEqual(true);
        })
    })

    describe('when clicking on remove button', () => {
        beforeEach(() => {
            task.find('.btn-remove').simulate('click');
        });

        it('calls the remove function callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    });
});
