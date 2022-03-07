import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, Completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: Completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
