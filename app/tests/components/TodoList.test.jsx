var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require ('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
//var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something',
                completed: false,
                completedAt: undefined,
                createAt: 500
            },
            {
                id: 2,
                text: 'Check mail',
                completed: false,
                completedAt: undefined,
                createAt: 500
            }
        ];
        var store = configure({
            todos : todos
        })
        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );

        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponets = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todosComponets.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });

});