import { ADD_TODO, GET_TODOS, MARK_COMPLETE, DELETE_TODO } from "../types.js";

const initialState = {
    todos: [],
};

/**
 * Todos.js: import {v4 as uuidv4} from 'uuid'
 {
    id: uuidv4(),
    title: ...,
    complate: false
 }
 
 * todoReducer.js:
 case 'ADD_TODO':
    add work into
 
 * todoAction.js:
    export const addTodo = newTodo
 */

const todoReducer = (state = initialState, action) => {
    // action.type;     action.payload
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
            };

        case MARK_COMPLETE:
            // console.log(action.payload);
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                }),
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        default:
            return state;
    }
};

export default todoReducer;
