import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from 'store';

const Todo = ({ id, text, handleClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

// Dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
};

// Connect Store
export default connect(null, mapDispatchToProps)(Todo);
