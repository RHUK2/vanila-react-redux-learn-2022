import { createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

number.textContent = 0;

const ADD = 'add';
const MINUS = 'minus';

// 초기화 한 번, 액션 콜 때 한 번
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

const countStore = createStore(countModifier);

const onChange = () => {
  number.textContent = countStore.getState();
};

countStore.subscribe(onChange);
// 액션은 type 프로퍼티를 가진 객체
add.addEventListener('click', () => countStore.dispatch({ type: ADD }));
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
