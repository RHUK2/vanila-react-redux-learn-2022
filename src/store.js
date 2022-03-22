import { createStore } from 'redux';

// Action Label
const ADD = 'add';
const DELETE = 'delete';

// Action
const addTodo = (text) => {
  return { type: ADD, text };
};
const deleteTodo = (id) => {
  return { type: DELETE, id };
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

// Create Store
const store = createStore(reducer);

// Export Action
export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
