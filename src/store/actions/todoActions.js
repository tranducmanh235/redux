// export const markComplete = () => {
//     const markCompleteAction = dispatch => {
//         dispatch({
//             type: "MARK_COMPLETE",
//             payload: 'my payload'
//         })
//     }

import axios from "axios";

import { ADD_TODO, GET_TODOS, MARK_COMPLETE, DELETE_TODO } from "../types";

//     return markCompleteAction
// }

export const getTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        dispatch({
            type: GET_TODOS,
            payload: response.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const markComplete = (id) => (dispatch) => {
    console.log(id);
    dispatch({
        type: MARK_COMPLETE,
        payload: id,
    });
};

export const addTodo = (newTodo) => async (dispatch) => {
    try {
        await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
        dispatch({
            type: ADD_TODO,
            payload: newTodo,
        });
    } catch (error) {
        console.log(error);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        dispatch({
            type: DELETE_TODO,
            payload: id,
        });
    } catch (error) {
        console.log(error);
    }
};
