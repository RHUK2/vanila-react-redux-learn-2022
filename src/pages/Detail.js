import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ todo }) => {
  return (
    <>
      {/* optional chaining
      ((todo === null || todo === undefined) ? undefined : todo.text); */}
      <h1>{todo?.text}</h1>
      {/* ((todo === null || todo === undefined) ? undefined : todo.id); */}
      <span>{todo?.id}</span>
    </>
  );
};

// Get State
const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    todo: state.find((todo) => todo.id === parseInt(id)),
  };
};

// Connect Store
export default connect(mapStateToProps)(Detail);
