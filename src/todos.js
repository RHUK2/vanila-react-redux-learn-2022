import { createStore } from 'redux';

const form = document.querySelector('#form');
const text = document.querySelector('#text');
const list = document.querySelector('#list');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = (todo) => {
  return { type: ADD_TODO, text: todo };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id: id };
};

// Do Not Use Mutate(변하는) State!!!
// 기존 상태를 직접 수정하는 것이 아니라 새로운 상태를 retrun하는 것!!
// React Hooks의 setState처럼 작동
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const onChange = () => {
  console.log(store.getState());
};

const dispatchAddTodo = (todo) => {
  store.dispatch(addTodo(todo));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  list.textContent = '';
  const todos = store.getState();
  todos.forEach((todo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    btn.textContent = 'Delete';
    li.id = todo.id;
    li.textContent = todo.text;
    list.appendChild(li);
    li.appendChild(btn);

    btn.addEventListener('click', dispatchDeleteTodo);
  });
};

store.subscribe(onChange);

store.subscribe(paintTodos);

const handleSubmit = (e) => {
  e.preventDefault();
  const todo = text.value;
  text.value = '';
  dispatchAddTodo(todo);
};

form.addEventListener('submit', handleSubmit);
