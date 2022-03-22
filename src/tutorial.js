import { createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

number.textContent = 0;

// Action
const ADD = 'add';
const MINUS = 'minus';

// Reducer
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// Create Store
const countStore = createStore(countModifier);

// Get State
const onChange = () => {
  number.textContent = countStore.getState();
};

// Subscribe
countStore.subscribe(onChange);

// Dispatch
add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
