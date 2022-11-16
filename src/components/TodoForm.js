import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTodo } from "../store/actions/todoActions";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (title !== "") {
            const newTodo = {
                id: uuidv4(),
                title,
                completed: false,
            };

            // console.log(newTodo);
            addTodo(newTodo);
            setTitle("");
        }
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" onChange={onTitleChange} value={title} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);
