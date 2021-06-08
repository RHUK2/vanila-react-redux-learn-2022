import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from 'store';

import Todo from 'components/Todo';

const Home = ({ todos, addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo //
            key={todo.id}
            id={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </>
  );
};

// store.getState();
const mapStateToProps = (state, ownProps) => {
  return { todos: state };
};

// store.dispatch();
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
};

// store와의 연결
// export default connect(mapStateToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
