const initialState = {
    todos: [
        {
            id: 1,
            title: "work 1",
            completed: false,
        },
        {
            id: 2,
            title: "work 2",
            completed: false,
        },
        // {
        //     id: 3,
        //     title: "work 3",
        //     completed: false,
        // },
    ],
};

const todoReducer = (state = initialState, action) => {
    return state;
};

export default todoReducer;
